export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-foreground rounded-sm flex items-center justify-center text-background font-bold text-sm tracking-tighter">X</div>
          <span className="text-lg font-medium tracking-widest uppercase">Xibotix</span>
        </div>
        <p className="text-muted text-sm">&copy; {new Date().getFullYear()} XIBOTIX Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
