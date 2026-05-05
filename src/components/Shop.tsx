import { motion } from "framer-motion";
import shopImage from "@/assets/coffee-shop.jpg";

export function Shop() {
  return (
    <section id="shop" className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-mocha font-medium">Our Shop</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
            Visit <span className="italic text-gradient-coffee">Buna Haus</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A warm corner of Addis Ababa where every cup tells a story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl shadow-2xl border border-border/60"
          >
            <img
              src={shopImage}
              alt="Buna Haus coffee shop interior in Addis Ababa"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 border border-border/60">
              <h3 className="font-display text-xl font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bole Road, Friendship Building<br />
                Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/60">
              <h3 className="font-display text-xl font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mon – Fri · 7:00 – 21:00<br />
                Sat – Sun · 8:00 – 22:00
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/60">
              <h3 className="font-display text-xl font-semibold mb-2">Contact</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                +251 911 234 567<br />
                hello@bunahaus.coffee
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
