import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section.jsx";
import { cv } from "../data/cv.js";

const categories = ["All", ...Object.keys(cv.skills)];

export function Skills() {
  const [active, setActive] = useState("All");

  const items =
    active === "All"
      ? Object.entries(cv.skills).flatMap(([cat, list]) => list.map((s) => ({ s, cat })))
      : cv.skills[active].map((s) => ({ s, cat: active }));

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools, languages & a mindset that ships."
      description="A snapshot of the technologies, languages and soft skills I use to build, learn and collaborate."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm transition-smooth border ${
              active === c
                ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                : "glass text-muted-foreground hover:text-foreground hover:border-accent/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-wrap gap-3">
        <AnimatePresence>
          {items.map(({ s, cat }) => (
            <motion.div
              key={`${cat}-${s}`}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl px-5 py-4 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-accent transition-smooth" />
              <div className="relative">
                <div className="font-semibold group-hover:text-accent-foreground transition-smooth">{s}</div>
                <div className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 transition-smooth">
                  {cat}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
