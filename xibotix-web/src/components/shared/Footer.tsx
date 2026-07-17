import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-surface border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/images/hopelift-logo.png" alt="HopeLift Logo" width={24} height={24} className="object-contain" />
          <span className="text-lg font-medium tracking-widest uppercase">HopeLift</span>
        </div>
        <p className="text-muted text-sm">&copy; {new Date().getFullYear()} HopeLift Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
