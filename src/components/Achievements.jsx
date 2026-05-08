import { motion } from "framer-motion";
import { Award, FileText, Download } from "lucide-react";
import { Section } from "./Section.jsx";
import { cv } from "../data/cv.js";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Milestones along the way."
      description="A few highlights that mark progress, growth, and ongoing curiosity."
    >
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {cv.achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-1 transition-smooth"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{a.detail}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden relative"
      >
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground shadow-glow">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-accent">Resume</div>
            <h3 className="text-xl font-bold">Get the full story — download my resume.</h3>
            <p className="text-sm text-muted-foreground mt-1">PDF · Updated 2026</p>
          </div>
        </div>
        <a
          href={cv.resume}
          download
          className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:scale-[1.03] transition-smooth"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </motion.div>
    </Section>
  );
}
