import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coffee.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ethiopian coffee being poured from a traditional jebena"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/30" />
      </div>

      <div className="relative container mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-accent font-medium mb-6"
          >
            Single-Origin · Traditionally Brewed
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-semibold text-cream leading-[1.05]"
          >
            Experience <span className="text-gradient-coffee italic">Authentic</span> Ethiopian Coffee
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-cream/80 max-w-xl leading-relaxed"
          >
            From the highlands of Yirgacheffe to your cup — discover the birthplace of coffee through every aromatic sip.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-xl shadow-accent/20 transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Menu
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-cream/30 px-8 py-4 text-base font-medium text-cream backdrop-blur-sm transition-all hover:bg-cream/10"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-widest uppercase"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
