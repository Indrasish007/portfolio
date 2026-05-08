import { GithubIcon } from "./icons/GithubIcon.jsx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.js";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-accent origin-left z-[60]"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 transition-smooth">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-smooth ${
              scrolled ? "glass shadow-elegant" : ""
            }`}
          >
            <button onClick={() => go("home")} className="flex items-center gap-2 group">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow">
                IA
              </span>
              <span className="hidden sm:block font-display font-semibold tracking-tight">
                Indrasish<span className="text-gradient">.</span>
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-smooth hover:text-foreground ${
                    active === l.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-primary/15 border border-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Indrasish007"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:grid place-items-center w-9 h-9 rounded-lg glass hover:text-accent transition-smooth"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <button
                onClick={toggle}
                className="grid place-items-center w-9 h-9 rounded-lg glass hover:text-accent transition-smooth"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setOpen((o) => !o)}
                className="lg:hidden grid place-items-center w-9 h-9 rounded-lg glass"
                aria-label="Menu"
              >
                {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mx-auto max-w-6xl px-4 sm:px-6 mt-2"
            >
              <div className="glass rounded-2xl p-3 flex flex-col">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => go(l.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-smooth ${
                      active === l.id
                        ? "bg-primary/15 text-foreground"
                        : "text-muted-foreground hover:bg-muted/40"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
