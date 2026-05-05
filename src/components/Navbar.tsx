import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl">☕</span>
          <span className={`font-display text-xl font-semibold tracking-tight ${scrolled ? "text-foreground" : "text-cream"}`}>
            Buna Haus
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-cream/90 hover:text-cream"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#menu"
          className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md"
        >
          Order Now
        </a>
      </div>
    </motion.header>
  );
}
