import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-mocha font-medium">Get in Touch</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
            Come say <span className="italic text-gradient-coffee">selam</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Questions, partnerships, or just love coffee? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border/60 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                required
                type="text"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
              placeholder="Tell us what's on your mind…"
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
          >
            {sent ? "✓ Message Sent" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
