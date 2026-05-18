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

export function ContactSection() {
  const [commandStarted, setCommandStarted] = useState(false);

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
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)]">
              <TerminalIcon className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="contact --status"
                active={commandStarted}
                speed={35}
                className="text-[var(--accent-green)]"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span>Let's build </span>
              <EncryptedText
                text="something useful"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-[var(--accent-indigo)]"
              />
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
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:opacity-90 hover:shadow-md hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              kylekolstad@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/kylekolstad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5"
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
            className="inline-block w-full max-w-2xl text-left font-mono text-sm min-w-0"
          >
            <Terminal
              title="Availability"
              username="kyle@portfolio/stack"
              runtimeEnvironment="bash"
              className="max-w-none"
              commands={["contact --availability"]}
              outputs={{
                0: [
                  "location: Green Bay, WI",
                  "status: Open to relocation",
                  "status: Available",
                ],
              }}
              typingSpeed={35}
              delayBetweenCommands={900}
              initialDelay={350}
              enableSound={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
