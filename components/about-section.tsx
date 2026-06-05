"use client";

import { motion } from "motion/react";
import { Code2, Lightbulb, Puzzle, Target, Terminal } from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { EncryptedText } from "@/components/ui/encrypted-text";
import {
  cardReveal,
  copyReveal,
  contentGrid,
  headingReveal,
  introContainer,
  sectionViewport,
  smoothSpring,
  terminalLabel,
} from "@/lib/motion";

export function AboutSection() {
  const [commandStarted, setCommandStarted] = useState(false);

  const cards = [
    {
      icon: Target,
      label: "/root-cause",
      title: "Turn Ambiguity Into Systems",
      description:
        "I take unclear operational problems, find the system constraints behind them, and turn them into software people can trust in production.",
    },
    {
      icon: Lightbulb,
      label: "/creative-systems",
      title: "Reduce Manual Work",
      description:
        "I look for the leverage point: the workflow, data handoff, or repeated task where automation can save time and prevent avoidable errors.",
    },
    {
      icon: Code2,
      label: "/production-ready",
      title: "Build for Reliability",
      description:
        "I build services and pipelines with monitoring, logging, and error recovery so failures are easier to catch, diagnose, and recover from.",
    },
    {
      icon: Puzzle,
      label: "/operational-impact",
      title: "Design for Scale",
      description:
        "My work has supported high-volume secure data exchange across a 500+ enterprise ecosystem and reduced dependency on 50+ systems.",
    },
  ];

  return (
    <section id="about" className="relative isolate py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-accent/20 dark:bg-accent/10" />
      <div className="max-w-7xl mx-auto w-full min-w-0">
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
            className="mb-12"
          >
            {/* Section Terminal Label */}
            <motion.div
              variants={terminalLabel}
              className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] mb-2"
            >
              <Terminal className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="cat /about.txt"
                active={commandStarted}
                speed={28}
                className="text-[var(--accent-green)]"
              />
            </motion.div>

            <div className="max-w-3xl">
              <motion.h2
                variants={headingReveal}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                <EncryptedText
                  text="What I Build"
                  encryptedClassName="text-muted-foreground"
                  revealedClassName="text-foreground"
                />
              </motion.h2>

              <motion.p
                variants={copyReveal}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                I build backend systems and automation that solve operational
                problems: cleaner data movement, fewer manual steps, stronger
                reliability, and services that are easier to support after
                launch.
              </motion.p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.label}
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={cardReveal}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5, transition: smoothSpring }}
                className="group relative bg-card border border-border/80 rounded-xl p-6 shadow-[0_10px_26px_rgba(15,23,42,0.035)] hover:border-border overflow-hidden"
              >
                <div className="relative">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="apple-motion flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-background border border-border/80 text-[var(--accent-indigo)] shadow-sm group-hover:border-border group-hover:bg-card">
                      <card.icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <span className="mb-1 block text-[11px] font-mono text-muted-foreground">
                        {card.label}
                      </span>

                      <h3 className="apple-color text-lg sm:text-xl font-semibold leading-snug group-hover:text-[var(--accent-indigo)]">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
