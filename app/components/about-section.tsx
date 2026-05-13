"use client";

import { motion } from "motion/react";
import { Code2, Layers, Zap, Target, Terminal } from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";

export function AboutSection() {
  const [commandStarted, setCommandStarted] = useState(false);

  const cards = [
    {
      icon: Target,
      label: "/now-building",
      title: "Current Focus",
      description:
        "Building scalable backend systems, enterprise integrations, and AI-powered automation tools for real operational workflows.",
    },
    {
      icon: Code2,
      label: "/technical-range",
      title: "Core Strengths",
      description:
        "API design, system architecture, database-backed applications, cloud infrastructure, and secure integration development.",
    },
    {
      icon: Layers,
      label: "/quality-bar",
      title: "Engineering Values",
      description:
        "Clear code, reliable systems, thoughtful abstractions, useful automation, and observability that makes issues easier to diagnose.",
    },
    {
      icon: Zap,
      label: "/systems-mindset",
      title: "System Thinking",
      description:
        "Designing with reliability, performance, maintainability, and downstream impact in mind from the beginning.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-accent/20 overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => {
            setCommandStarted(true);
          }}
        >
          <div className="mb-12">
            {/* Section Terminal Label */}
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-indigo)] mb-2">
              <Terminal className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="cat /about.txt"
                active={commandStarted}
                speed={35}
                className="text-[var(--accent-indigo)]"
              />
            </div>

            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Building software that matters
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a backend-focused software engineer with 6+ years of
                experience building production systems, APIs, integrations, and
                automation workflows. I care about software that is reliable,
                understandable, and useful beyond the first release.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                }}
                className="group relative bg-card/80 backdrop-blur-sm border border-border/80 rounded-xl p-6 shadow-sm transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-indigo)] via-transparent to-transparent opacity-0 group-hover:opacity-[0.035] transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border/80 text-[var(--accent-indigo)] shadow-sm transition-all duration-300 group-hover:border-border group-hover:bg-card group-hover:shadow-md group-hover:-translate-y-0.5">
                        <card.icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-[var(--accent-indigo)] transition-colors">
                          {card.title}
                        </h3>

                        <span className="mt-1 inline-flex text-[11px] font-mono text-muted-foreground">
                          {card.label}
                        </span>
                      </div>
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