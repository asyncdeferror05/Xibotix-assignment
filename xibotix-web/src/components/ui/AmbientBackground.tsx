"use client";

import { useEffect, useRef } from "react";

class Particle {
  lat: number;
  lon: number;
  radius: number;
  size: number;
  waveOffset: number;
  color: string;
  baseRadius: number;

  constructor(lat: number, lon: number, maxRadius: number) {
    this.lat = lat;
    this.lon = lon;
    this.baseRadius = maxRadius * 0.9;
    this.radius = this.baseRadius;
    this.size = Math.random() * 1.5 + 1; // Size of the scale
    this.waveOffset = Math.random() * Math.PI * 2;
    
    // Color mapping based on longitude (left to right mapping)
    // Map lon from [-PI, PI] to [0, 1]
    const ratio = (this.lon + Math.PI) / (Math.PI * 2);
    if (ratio < 0.25) {
      this.color = "59, 130, 246"; // Blue
    } else if (ratio < 0.5) {
      this.color = "99, 102, 241"; // Indigo
    } else if (ratio < 0.75) {
      this.color = "236, 72, 153"; // Pink
    } else {
      this.color = "249, 115, 22"; // Orange
    }
  }

  update(time: number) {
    // slowly rotate the longitude
    this.lon += 0.002;
    if (this.lon > Math.PI) {
      this.lon -= Math.PI * 2;
    }
    
    // Wave on the radius to make it feel alive and undulating
    this.radius = this.baseRadius + Math.sin(this.lat * 5 + this.lon * 3 + time * 0.02) * (this.baseRadius * 0.05);
  }

  draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, time: number) {
    // Convert spherical to 3D cartesian
    const x3d = this.radius * Math.cos(this.lat) * Math.cos(this.lon);
    const z3d = this.radius * Math.cos(this.lat) * Math.sin(this.lon);
    const y3d = this.radius * Math.sin(this.lat);

    // Tilt the sphere slightly towards the camera (rotate around X axis)
    const tiltX = 0.3; 
    const yRotated = y3d * Math.cos(tiltX) - z3d * Math.sin(tiltX);
    const zRotated = y3d * Math.sin(tiltX) + z3d * Math.cos(tiltX);

    // Slowly pan the sphere around Y axis
    const rotY = time * 0.001;
    const xFinal = x3d * Math.cos(rotY) - zRotated * Math.sin(rotY);
    const zFinal = x3d * Math.sin(rotY) + zRotated * Math.cos(rotY);
    const yFinal = yRotated;

    // 3D Projection
    const perspective = 1000;
    const zToDivide = zFinal + 1200; // move sphere back
    
    // If it's behind the camera, don't draw
    if (zToDivide < 0) return;

    const scaleProjected = perspective / zToDivide;
    const xProjected = centerX + xFinal * scaleProjected;
    const yProjected = centerY + yFinal * scaleProjected;

    // Calculate opacity based on Z depth (fade out objects further away/on back of sphere)
    // zFinal goes from roughly -radius to +radius. Front is -z in this coord system.
    const opacity = Math.max(0, Math.min(0.8, (this.radius - zFinal) / (this.radius * 2)));
    
    // Only draw if visible
    if (opacity > 0.05) {
      ctx.save();
      ctx.translate(xProjected, yProjected);
      
      // Calculate 2D rotation for the "scale" dash.
      // Make them align tangentially to the latitude circles.
      // Projection math simplification: just rotate based on longitude
      ctx.rotate(-this.lon + rotY);

      ctx.beginPath();
      // scale size by distance
      const s = this.size * scaleProjected;
      // Draw a small dash
      ctx.moveTo(-s * 1.5, 0);
      ctx.lineTo(s * 1.5, 0);
      ctx.lineWidth = s * 0.8;
      ctx.strokeStyle = `rgba(${this.color}, ${opacity})`;
      ctx.lineCap = "round";
      ctx.stroke();
      
      ctx.restore();
    }
  }
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let time = 0;

    const init = () => {
      // Handle high DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Determine radius based on screen size
      const maxRadius = Math.min(width, height) * 0.6;

      particles = [];
      
      // Generate particles in a spherical grid pattern to mimic the image
      const latBands = width < 768 ? 20 : 30; // Fewer bands on mobile
      const lonBands = width < 768 ? 30 : 50;

      for (let i = 0; i <= latBands; i++) {
        const lat = (Math.PI * i) / latBands - Math.PI / 2; // -PI/2 to PI/2
        for (let j = 0; j <= lonBands; j++) {
          const lon = (2 * Math.PI * j) / lonBands - Math.PI; // -PI to PI
          
          // Add some noise to the grid so it's not too rigid
          const latNoise = lat + (Math.random() - 0.5) * 0.1;
          const lonNoise = lon + (Math.random() - 0.5) * 0.1;
          
          // Don't generate at the exact poles to avoid clustering
          if (Math.abs(lat) < Math.PI / 2 - 0.1) {
             particles.push(new Particle(latNoise, lonNoise, maxRadius));
          }
        }
      }
    };

    const animate = () => {
      time += 1;
      
      // Clear background so it's transparent and sections show through
      ctx.clearRect(0, 0, width, height);

      // Slowly drift the sphere from left to right across the screen
      // Reduced speed (0.0003) and constrained amplitude (width * 0.35) so only about 40% goes off-screen
      const centerX = (width * 0.5) + Math.sin(time * 0.0003) * (width * 0.35);
      const centerY = height * 0.5;

      particles.forEach((particle) => {
        particle.update(time);
        particle.draw(ctx, centerX, centerY, time);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(init, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
}
