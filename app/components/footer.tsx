"use client";

import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";

export function Footer() {
  const [commandStarted, setCommandStarted] = useState(false);

  return (
    <footer className="px-4 sm:px-6 py-8 overflow-x-clip">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
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
              © {new Date().getFullYear()} Kyle Kolstad. Built with React,
              Tailwind, and attention to detail.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:kylekolstad@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg text-foreground/80 transition-all duration-300 hover:text-[var(--accent-violet)] hover:bg-background/70 hover:shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-foreground/80 transition-all duration-300 hover:text-[var(--accent-violet)] hover:bg-background/70 hover:shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-foreground/80 transition-all duration-300 hover:text-[var(--accent-violet)] hover:bg-background/70 hover:shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
