"use client";

import { motion } from "motion/react";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { Terminal } from "@/components/ui/terminal";
import { EncryptedText } from "@/components/ui/encrypted-text";
import {
  actionReveal,
  headingReveal,
  copyReveal,
  appleEase,
  smoothSpring,
  sectionViewport,
  terminalLabel,
} from "@/lib/motion";

export function HeroSection() {
  const [profileCommandStarted, setProfileCommandStarted] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[100svh] flex items-start lg:items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-20 overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center min-w-0">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            onViewportEnter={() => {
              if (window.innerWidth < 1024) {
                setShowRightPanel(true);
                return;
              }

              window.setTimeout(() => {
                setShowRightPanel(true);
              }, 700);
            }}
            variants={{
              hidden: { opacity: 0, x: -16, y: 22 },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: 0.78,
                  ease: appleEase,
                  opacity: { duration: 0.62, ease: "easeOut" },
                  staggerChildren: 0.14,
                  delayChildren: 0.16,
                },
              },
            }}
            className="min-w-0"
          >
            <motion.div
              variants={terminalLabel}
              className="mb-2 flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] min-w-0"
              onAnimationStart={() => {
                setProfileCommandStarted(true);
              }}
            >
              <TerminalIcon className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="cat ./profile.json"
                active={profileCommandStarted}
                speed={28}
                className="text-[var(--accent-green)]"
              />
            </motion.div>

            <motion.h1
              variants={headingReveal}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight break-words"
            >
              <span>Building reliable</span>
              <br />
              <EncryptedText
                text="software systems"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-[var(--accent-indigo)]"
              />
            </motion.h1>

            <motion.p
              variants={copyReveal}
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              Software engineer with 6+ years of experience turning complex
              system problems into production services, automation, and data
              flows that reduce manual work and improve reliability.
            </motion.p>

            <motion.div
              variants={actionReveal}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={scrollToWork}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ y: -1, scale: 0.99 }}
                transition={smoothSpring}
                className="w-full sm:w-auto justify-center px-6 py-3 bg-[var(--accent-indigo)] text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-[var(--glow-indigo)]"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ y: -1, scale: 0.99 }}
                transition={smoothSpring}
                className="w-full sm:w-auto justify-center px-6 py-3 border border-border rounded-lg font-medium flex items-center"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <div className="relative w-full min-w-0">
            {showRightPanel ? (
              <Terminal
                title="Developer Overview"
                username="kyle@portfolio"
                className="max-w-none px-0"
                contentClassName="overflow-y-auto"
                runtimeEnvironment="bash"
                commands={["whoami", "cat core-stack.json"]}
                outputs={{
                  0: [
                    "name: Kyle Kolstad",
                    "role: Software Engineer",
                    "experience: 6+ years",
                    "focus: Backend Systems, APIs, Enterprise Integrations, Applied AI",
                  ],
                  1: [
                    "{",
                    '  "stack": [',
                    '    "Java", "Python", "SQL", "Spring Boot", "Docker"',
                    "  ]",
                    "}",
                  ],
                }}
                typingSpeed={18}
                delayBetweenCommands={80}
                initialDelay={140}
                outputLineDelay={35}
                enableSound={false}
                waitForEntrance={false}
                entranceDelay={0}
                entranceOffsetX={20}
                entranceOffsetY={14}
                reserveFinalHeight
                maxReservedHeightVh={46}
                fitContent
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
