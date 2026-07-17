import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { HumanoidRobotics } from "@/components/sections/HumanoidRobotics";
import { RehabDevices } from "@/components/sections/RehabDevices";
import { TechnologyInnovation } from "@/components/sections/TechnologyInnovation";
import { HelixCursor } from "@/components/ui/HelixCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-foreground">
      <HelixCursor />
      <Navbar />
      <Hero />
      <CompanyOverview />
      <HumanoidRobotics />
      <RehabDevices />
      <TechnologyInnovation />
      <Footer />
    </main>
  );
}
