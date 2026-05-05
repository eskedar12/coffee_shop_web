import { motion } from "framer-motion";
import aboutImg from "@/assets/about-coffee.jpg";

export function About() {
  return (
    <section id="about" className="py-28 bg-secondary/40">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-2" />
          <img
            src={aboutImg}
            alt="Traditional Ethiopian coffee ceremony"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-mocha font-medium">Our Heritage</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold leading-tight">
            The birthplace of <span className="italic text-gradient-coffee">coffee</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Legend says a 9th-century goatherd named Kaldi discovered coffee in the Ethiopian highlands. Today, the
            <em className="text-foreground"> buna </em>
            ceremony remains the heart of Ethiopian hospitality — a slow, deliberate ritual of roasting, grinding,
            and brewing that turns coffee into community.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            At Buna Haus, we honor that tradition. Our beans are sourced directly from cooperatives in Yirgacheffe,
            Sidamo, and Harrar — bringing the soul of Ethiopia to every cup we serve.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "12+", l: "Bean Origins" },
              { n: "100%", l: "Single-Source" },
              { n: "1500yr", l: "Of Heritage" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-accent pl-4">
                <div className="text-2xl font-display font-semibold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
