import { GithubIcon } from "./icons/GithubIcon.jsx";
import { Mail, Heart } from "lucide-react";
import { cv } from "../data/cv.js";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow">
              IA
            </span>
            <span className="font-display font-semibold tracking-tight">{cv.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Computer Science graduate · AI/ML enthusiast · Building software with care.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-accent mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <button onClick={() => go(l.id)} className="text-muted-foreground hover:text-foreground transition-smooth">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-accent mb-3">Connect</div>
          <div className="flex gap-3">
            <a href={cv.github} target="_blank" rel="noreferrer" className="grid place-items-center w-10 h-10 rounded-xl glass hover:text-accent transition-smooth" aria-label="GitHub">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href={`mailto:${cv.email}`} className="grid place-items-center w-10 h-10 rounded-xl glass hover:text-accent transition-smooth" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {cv.name}. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> using React, Tailwind & Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  );
}
