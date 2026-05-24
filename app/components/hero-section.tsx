"use client";

import { motion } from "motion/react";
import { ArrowRight, Terminal as TerminalIcon } from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { Terminal } from "@/components/ui/terminal";
import { EncryptedText } from "@/components/ui/encrypted-text";

export function HeroSection() {
  const [profileCommandStarted, setProfileCommandStarted] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[100svh] flex items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-20 overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center min-w-0">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
            onAnimationComplete={() => {
              setProfileCommandStarted(true);
            }}
          >
            <div className="mb-2 flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] min-w-0">
              <TerminalIcon className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="cat ./profile.json"
                active={profileCommandStarted}
                speed={35}
                className="text-[var(--accent-green)]"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight break-words">
              <span>Building reliable</span>
              <br />
              <EncryptedText
                text="software systems"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-[var(--accent-indigo)]"
              />
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Software engineer specializing in scalable backend systems,
              enterprise APIs, cloud infrastructure, and applied AI. I build
              production services that move data reliably.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="px-6 py-3 bg-[var(--accent-indigo)] text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[var(--glow-indigo)] hover:bg-[var(--accent-indigo)]/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 border border-border rounded-lg font-medium transition-all duration-300 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full min-w-0"
          >
            <Terminal
              title="Developer Overview"
              username="kyle@portfolio"
              className="max-w-none px-0"
              contentClassName="h-auto min-h-80 overflow-visible sm:h-80 sm:overflow-y-auto"
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
              typingSpeed={40}
              delayBetweenCommands={900}
              initialDelay={350}
              enableSound={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
