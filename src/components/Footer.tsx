export function Footer() {
  return (
    <footer className="bg-espresso text-cream/80 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">☕</span>
          <span className="font-display text-lg text-cream">Buna Haus</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Buna Haus. Brewed with love in Addis Ababa.</p>
        <div className="flex gap-5 text-sm">
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
