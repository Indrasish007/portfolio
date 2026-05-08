import { GithubIcon } from "./icons/GithubIcon.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { cv } from "../data/cv.js";
import portrait from "../assets/portrait.jpg";

const roles = [
  "AI / ML Enthusiast",
  "Computer Science Graduate",
  "Python Developer",
  "Lifelong Learner",
];

function useTyped() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  useEffect(() => {
    const word = roles[i % roles.length];
    let t;
    if (text.length < word.length) {
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 70);
    } else {
      t = setTimeout(() => {
        const eraser = setInterval(() => {
          setText((prev) => {
            if (prev.length === 0) {
              clearInterval(eraser);
              setI((x) => x + 1);
              return "";
            }
            return prev.slice(0, -1);
          });
        }, 35);
      }, 1600);
    }
    return () => clearTimeout(t);
  }, [text, i]);
  return text;
}

export function Hero() {
  const typed = useTyped();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float [animation-delay:-3s]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-muted-foreground mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Available for internships & full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient gradient-animate bg-gradient-accent bg-clip-text">
              {cv.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-2xl text-muted-foreground h-8"
          >
            <span className="text-foreground/90 font-medium">{typed}</span>
            <span className="cursor-blink text-accent">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
          >
            {cv.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={cv.resume}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary text-primary-foreground px-6 py-3 font-medium shadow-glow hover:scale-[1.03] transition-smooth"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium hover:border-accent/60 hover:text-accent transition-smooth"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-5 text-sm text-muted-foreground"
          >
            <a
              href={cv.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-accent transition-smooth"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {cv.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-accent opacity-30 blur-2xl" />
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-[2rem] glass shadow-elegant overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-20" />
            <img
              src={portrait}
              alt={`Portrait of ${cv.name}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center gap-3">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <div className="text-xs">
                <div className="font-semibold">Open to opportunities</div>
                <div className="text-muted-foreground">Internships · Full-time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
