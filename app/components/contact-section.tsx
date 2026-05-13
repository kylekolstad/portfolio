"use client";

import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Terminal,
  MapPin,
  Plane
} from "lucide-react";
import { useState } from "react";
import { TerminalPrompt } from "./ui/terminal-prompt";
import { TypingCommand } from "./ui/typing-command";

export function ContactSection() {
  const [commandStarted, setCommandStarted] = useState(false);
  const [terminalStarted, setTerminalStarted] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);
  const [showAvailableStatus, setShowAvailableStatus] = useState(false);

  function handleCommandDone() {
    setShowOutput(true);

    window.setTimeout(() => {
      setShowFinalPrompt(true);
    }, 550);

    window.setTimeout(() => {
      setShowAvailableStatus(true);
    }, 900);
  }

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 bg-accent/20 overflow-x-clip">
      <div className="max-w-4xl mx-auto text-center w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => {
            setCommandStarted(true);
          }}
        >
          {/* Section Terminal Label */}
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-indigo)]">
              <Terminal className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="contact --status"
                active={commandStarted}
                speed={35}
                className="text-[var(--accent-indigo)]"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-[var(--accent-indigo)] to-[var(--accent-blue)] bg-clip-text text-transparent">
              useful
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm currently available for backend engineering roles, consulting
            projects, and technical advisory work. If you're building something
            interesting and need help with APIs, cloud infrastructure, or
            integrations, let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:kylekolstad@gmail.com"
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              kylekolstad@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Contact Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            onAnimationComplete={() => {
              setTerminalStarted(true);
            }}
            className="inline-block w-full max-w-2xl bg-card border border-border rounded-xl text-left font-mono text-sm shadow-xl overflow-hidden min-w-0"
          >
            {/* Matched Window Header */}
            <div className="flex items-center bg-muted/50 border-b border-border px-4 py-3 min-h-[45px]">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-500" />
                  <h3 className="font-semibold text-sm text-foreground">
                    Availability
                  </h3>
                </div>
              </div>

              {showAvailableStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-auto flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-xs text-teal-500">Available</span>
                </motion.div>
              )}
            </div>

            {/* Terminal Body */}
            <div className="p-6 bg-background font-mono text-sm">
              <TerminalPrompt
                command="contact --availability"
                typing
                active={terminalStarted}
                speed={35}
                onDone={handleCommandDone}
              />

              {showOutput && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mt-4 space-y-3 pl-4 border-l-2 border-border text-xs"
                >
                  <div className="grid grid-cols-[18px_1fr] items-center gap-3">
                    <MapPin className="w-3.5 h-3.5 text-teal-500" />
                    <span className="text-foreground">Green Bay, WI</span>
                  </div>

                  <div className="grid grid-cols-[18px_1fr] items-center gap-3">
                    <Plane className="w-3.5 h-3.5 text-[var(--accent-indigo)]" />
                    <span className="text-foreground">Open to relocation</span>
                  </div>
                </motion.div>
              )}

              {showFinalPrompt && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="mt-6"
                >
                  <TerminalPrompt showCursorOnly />
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}