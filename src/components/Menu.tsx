import { motion } from "framer-motion";

const items = [
  { name: "Buna", desc: "Traditional ceremony coffee, roasted and brewed in a clay jebena. Bold and aromatic.", price: 80, tag: "Signature" },
  { name: "Macchiato", desc: "Ethiopian espresso topped with a delicate cloud of steamed milk foam.", price: 95, tag: "" },
  { name: "Yirgacheffe Pour Over", desc: "Bright, floral notes with hints of citrus and bergamot. Single-origin.", price: 130, tag: "New" },
  { name: "Sidamo Espresso", desc: "Rich, full-bodied espresso with chocolatey undertones from southern Ethiopia.", price: 70, tag: "" },
  { name: "Spris (Half & Half)", desc: "Traditional Ethiopian blend of coffee and tea — uniquely smooth and warming.", price: 85, tag: "" },
  { name: "Harrar Cold Brew", desc: "Slow-steeped 18 hours. Wine-like, fruity, and naturally sweet.", price: 110, tag: "" },
];

export function Menu() {
  return (
    <section id="menu" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-mocha font-medium">Our Menu</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
            Crafted from <span className="italic text-gradient-coffee">heritage beans</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each cup tells a story — from highland farm to your hands.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card rounded-2xl p-7 border border-border/60 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
            >
              {item.tag && (
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-wider bg-accent/20 text-mocha px-2.5 py-1 rounded-full font-semibold">
                  {item.tag}
                </span>
              )}
              <div className="text-3xl mb-4 opacity-80 group-hover:scale-110 transition-transform">☕</div>
              <h3 className="text-2xl font-display font-semibold">{item.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed min-h-[60px]">{item.desc}</p>
              <div className="mt-6 flex items-baseline justify-between border-t border-border/60 pt-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Price</span>
                <span className="text-xl font-display font-semibold text-primary">
                  {item.price} <span className="text-sm font-sans text-muted-foreground">ETB</span>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
