import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Target } from "lucide-react";
import { Section } from "./Section.jsx";
import { cv } from "../data/cv.js";

const highlights = [
  { icon: Brain, title: "AI/ML Mindset", text: "Building data-driven solutions with Python & ML algorithms." },
  { icon: Code2, title: "Polyglot Coder", text: "Comfortable across Python, Java, C/C++, SQL and the web stack." },
  { icon: Rocket, title: "Ship-It Attitude", text: "From notebook experiments to deployed Streamlit apps." },
  { icon: Target, title: "Detail-Oriented", text: "Meticulous about clean structure, naming and reproducibility." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A curious builder turning ideas into intelligent products."
      description={cv.about}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-5 hover:border-accent/40 hover:-translate-y-1 transition-smooth"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground mb-3 shadow-glow">
                <h.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 content-start">
          {cv.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center hover:border-accent/40 transition-smooth"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground tracking-wide uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
          <div className="col-span-2 glass rounded-2xl p-6">
            <div className="text-sm text-muted-foreground mb-2">Currently</div>
            <div className="font-semibold">Pursuing MCA at Academy of Technology (MAKAUT)</div>
            <div className="text-sm text-muted-foreground mt-1">
              Exploring deep learning, full-stack development & system design.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
