"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { sectionViewport, smoothSpring, softCardReveal } from "@/lib/motion";

export function Footer() {
  const [commandStarted, setCommandStarted] = useState(false);

  return (
    <footer className="px-4 sm:px-6 py-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={softCardReveal}
          onViewportEnter={() => {
            setCommandStarted(true);
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 bg-muted/50 backdrop-blur-xl border border-border rounded-xl shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground text-center sm:text-left">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-green)]">
              <Terminal className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="build --complete"
                active={commandStarted}
                speed={35}
                className="text-[var(--accent-green)]"
              />
            </div>

            <span className="hidden sm:inline text-border">|</span>

            <span>
              &copy; {new Date().getFullYear()} Kyle Kolstad. Built with React,
              Tailwind, and attention to detail.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href="mailto:kylekolstad@gmail.com"
              aria-label="Email"
              whileHover={{ y: -2, scale: 1.04, color: "var(--accent-indigo)" }}
              whileTap={{ y: -1, scale: 0.97 }}
              transition={smoothSpring}
              className="p-2 rounded-lg text-foreground/80"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://github.com/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -2, scale: 1.04, color: "var(--accent-indigo)" }}
              whileTap={{ y: -1, scale: 0.97 }}
              transition={smoothSpring}
              className="p-2 rounded-lg text-foreground/80"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -2, scale: 1.04, color: "var(--accent-indigo)" }}
              whileTap={{ y: -1, scale: 0.97 }}
              transition={smoothSpring}
              className="p-2 rounded-lg text-foreground/80"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
