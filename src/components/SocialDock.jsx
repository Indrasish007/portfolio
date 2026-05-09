import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon } from "./icons/GithubIcon.jsx";
import { Linkedin, Instagram, Facebook, Twitter } from "./icons/BrandIcons.jsx";
import { cv } from "../data/cv.js";

const items = [
  { label: "Email", href: cv.email ? `mailto:${cv.email}` : null, Icon: Mail, color: "#EA4335" },
  { label: "GitHub", href: cv.github, Icon: GithubIcon, color: "#ffffff" },
  { label: "LinkedIn", href: cv.linkedin, Icon: Linkedin, color: "#0A66C2" },
  { label: "Instagram", href: cv.instagram, Icon: Instagram, color: "#E1306C" },
  { label: "Facebook", href: cv.facebook, Icon: Facebook, color: "#1877F2" },
  { label: "Twitter / X", href: cv.twitter, Icon: Twitter, color: "#ffffff" },
].filter((item) => Boolean(item.href));

export function SocialDock() {
  return (
    <div className="w-full flex justify-center py-4">
      <motion.ul
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-full px-4 py-3 flex items-end gap-2 sm:gap-3 shadow-elegant"
      >
        {items.map(({ label, href, Icon, color }) => {
          const external = href.startsWith("http");
          return (
            <li key={label} className="relative group">
            <a  
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className="block"
            >
                <motion.span
                  whileHover={{ scale: 1.45, y: -10 }}
                  whileTap={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="grid place-items-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card/70 border border-border text-foreground hover:text-[var(--icon-color)] hover:border-[var(--icon-color)] transition-colors"
                  style={{ ["--icon-color"]: color }}
                >
                  <Icon className="w-5 h-5" />
                </motion.span>
              </a>
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover text-popover-foreground text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-elegant border border-border">
                {label}
              </span>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}