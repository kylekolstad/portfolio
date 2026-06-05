"use client";

import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Terminal as TerminalIcon,
} from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { Terminal } from "@/components/ui/terminal";
import { EncryptedText } from "@/components/ui/encrypted-text";
import {
  actionReveal,
  copyReveal,
  headingReveal,
  introContainer,
  panelReveal,
  panelTransition,
  sectionViewport,
  smoothSpring,
  terminalLabel,
} from "@/lib/motion";

export function ContactSection() {
  const [commandStarted, setCommandStarted] = useState(false);

  return (
    <section id="contact" className="relative isolate py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-accent/20 dark:bg-accent/10" />
      <div className="max-w-4xl mx-auto text-center w-full min-w-0">
        <motion.div
          viewport={sectionViewport}
          onViewportEnter={() => {
            setCommandStarted(true);
          }}
        >
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={introContainer()}
          >
          {/* Section Terminal Label */}
          <motion.div
            variants={terminalLabel}
            className="mb-4 flex justify-center"
          >
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)]">
              <TerminalIcon className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="contact --status"
                active={commandStarted}
                speed={28}
                className="text-[var(--accent-green)]"
              />
            </div>
          </motion.div>

          <motion.h2
            variants={headingReveal}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span>Let's build </span>
            <EncryptedText
              text="something useful"
              startDelayMs={420}
              revealDelayMs={44}
              flipDelayMs={56}
              encryptedClassName="text-muted-foreground"
              revealedClassName="text-[var(--accent-indigo)]"
            />
          </motion.h2>

          <motion.p
            variants={copyReveal}
            className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            I'm currently available for backend engineering roles, consulting
            projects, and technical advisory work. If you're building something
            interesting and need help with APIs, cloud infrastructure, or
            integrations, let's talk.
          </motion.p>

          <motion.div
            variants={actionReveal}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:kylekolstad@gmail.com"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ y: -1, scale: 0.99 }}
              transition={smoothSpring}
              className="w-full sm:w-auto justify-center px-6 py-3 bg-[var(--accent-indigo)] text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-[var(--glow-indigo)]"
            >
              <Mail className="w-4 h-4" />
              kylekolstad@gmail.com
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ y: -1, scale: 0.99 }}
              transition={smoothSpring}
              className="w-full sm:w-auto justify-center px-6 py-3 border border-border rounded-lg font-medium flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ y: -1, scale: 0.99 }}
              transition={smoothSpring}
              className="w-full sm:w-auto justify-center px-6 py-3 border border-border rounded-lg font-medium flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          </motion.div>

          {/* Contact Terminal Window */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={panelReveal}
            transition={{ ...panelTransition, delay: 0.24 }}
            className="inline-block w-full max-w-2xl text-left font-mono text-sm min-w-0"
          >
            <Terminal
              title="Availability"
              username="kyle@portfolio/stack"
              runtimeEnvironment="bash"
              className="max-w-none"
              contentClassName="overflow-y-auto"
              commands={["contact --availability"]}
              outputs={{
                0: [
                  "location: Green Bay, WI",
                  "status: Available for backend engineering roles",
                  "focus: Backend Systems, APIs, Enterprise Integrations, Applied AI",
                ],
              }}
              typingSpeed={18}
              delayBetweenCommands={280}
              initialDelay={140}
              enableSound={false}
              waitForEntrance={false}
              entranceDelay={0}
              reserveFinalHeight
              maxReservedHeightVh={32}
              fitContent
            />
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
