import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section.jsx";
import { cv } from "../data/cv.js";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="An academic journey rooted in computer science."
      description="From foundational schooling to a Master's in Computer Application — a continuous arc of curiosity."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
        <div className="space-y-10">
          {cv.education.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className={`relative grid sm:grid-cols-2 gap-6 ${left ? "" : "sm:[&>*:first-child]:order-2"}`}
              >
                <div className={`pl-12 sm:pl-0 ${left ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-1 transition-smooth">
                    <div className="text-xs font-semibold tracking-widest uppercase text-accent">
                      {e.date}
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{e.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{e.org}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{e.detail}</p>
                  </div>
                </div>
                <div className="hidden sm:block" />
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
