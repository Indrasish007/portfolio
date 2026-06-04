import { GithubIcon } from "./icons/GithubIcon.jsx";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Section } from "./Section.jsx";
import { cv } from "../data/cv.js";

export function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(cv.projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? cv.projects : cv.projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built — with intent."
      description="A selection of work where I designed, coded, and shipped end-to-end."
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

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-6 sm:p-8 overflow-hidden hover:border-accent/40 transition-smooth"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="relative">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-medium text-accent tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> {p.category}
                  </div>
                  {p.status && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30">
                      🚧 {p.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm glass px-4 py-2 rounded-xl hover:text-accent transition-smooth"
                    >
                      <GithubIcon className="w-4 h-4" /> Source
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm glass px-4 py-2 rounded-xl text-muted-foreground cursor-not-allowed opacity-80">
                      <GithubIcon className="w-4 h-4" /> Source · Coming Soon
                    </span>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm bg-gradient-primary text-primary-foreground px-4 py-2 rounded-xl hover:scale-[1.03] transition-smooth shadow-glow"
                    >
                      <ExternalLink className="w-4 h-4" /> View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

// status change 

// import { GithubIcon } from "./icons/GithubIcon.jsx";
// import { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, Sparkles } from "lucide-react";
// import { Section } from "./Section.jsx";
// import { cv } from "../data/cv.js";

// export function Projects() {
//   const categories = useMemo(
//     () => ["All", ...Array.from(new Set(cv.projects.map((p) => p.category)))],
//     []
//   );
//   const [active, setActive] = useState("All");
//   const filtered = active === "All" ? cv.projects : cv.projects.filter((p) => p.category === active);

//   return (
//     <Section
//       id="projects"
//       eyebrow="Projects"
//       title="Things I've built — with intent."
//       description="A selection of work where I designed, coded, and shipped end-to-end."
//     >
//       <div className="flex flex-wrap gap-2 mb-8">
//         {categories.map((c) => (
//           <button
//             key={c}
//             onClick={() => setActive(c)}
//             className={`px-4 py-2 rounded-full text-sm transition-smooth border ${
//               active === c
//                 ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
//                 : "glass text-muted-foreground hover:text-foreground hover:border-accent/40"
//             }`}
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       <motion.div layout className="grid md:grid-cols-2 gap-6">
//         <AnimatePresence>
//           {filtered.map((p, i) => (
//             <motion.article
//               key={p.title}
//               layout
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 30 }}
//               transition={{ duration: 0.5, delay: i * 0.06 }}
//               whileHover={{ y: -6 }}
//               className="group relative glass rounded-3xl p-6 sm:p-8 overflow-hidden hover:border-accent/40 transition-smooth"
//             >
//               <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
//               <div className="relative">
//                 <div className="flex items-center gap-2 text-xs font-medium text-accent tracking-widest uppercase">
//                   <Sparkles className="w-3.5 h-3.5" /> {p.category}
//                 </div>
//                 <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
//                 <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

//                 <ul className="mt-5 space-y-2">
//                   {p.features.map((f) => (
//                     <li key={f} className="flex items-start gap-2 text-sm">
//                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
//                       <span className="text-muted-foreground">{f}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="mt-6 flex flex-wrap gap-2">
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-xs px-2.5 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   {p.github && (
//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center gap-2 text-sm glass px-4 py-2 rounded-xl hover:text-accent transition-smooth"
//                     >
//                       <GithubIcon className="w-4 h-4" /> Source
//                     </a>
//                   )}
//                   <a
//                     href={p.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 text-sm bg-gradient-primary text-primary-foreground px-4 py-2 rounded-xl hover:scale-[1.03] transition-smooth shadow-glow"
//                   >
//                     <ExternalLink className="w-4 h-4" /> View Project
//                   </a>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </Section>
//   );
// }
