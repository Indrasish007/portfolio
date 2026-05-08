import { motion } from "framer-motion";

export function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl mb-12 sm:mb-16"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-accent mb-4">
              <span className="w-8 h-px bg-accent" />
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">{title}</h2>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
