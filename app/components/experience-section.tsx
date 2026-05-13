"use client";

import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";

export function ExperienceSection() {
  const [commandStarted, setCommandStarted] = useState(false);

  const experiences = [
    {
      date: "2024 - Present",
      role: "Backend Engineer (Integration & Automation)",
      org: "St. Norbert College",
      bullets: [
        "Delivered 25 integrations within a 500+ enterprise ecosystem, enabling secure, high-volume data exchange across enterprise platforms.",
        "Engineered Java-based integration services for complex workflows, supporting scalable production automation and reliable system interoperability.",
        "Architected scalable Spring Boot REST APIs that centralized institutional data into a single source of truth, reducing dependency on 50+ systems.",
        "Implemented fault-tolerant automation pipelines with monitoring, logging, and error recovery, improving system reliability.",
      ],
      tags: ["Java", "Spring Boot", "REST APIs", "Workday", "Automation"],
    },
    {
      date: "2020 - 2023",
      role: "Software Engineer (Full Stack)",
      org: "Envano",
      bullets: [
        "Developed custom web applications and backend APIs for high-traffic digital platforms, supporting scalable and performant solutions.",
        "Optimized backend services integrating external APIs, CMS platforms, and commerce systems, improving performance and system scalability.",
        "Created a reusable component library and website framework that reduced typical project staffing from 3 developers to 1, accelerating delivery.",
      ],
      tags: ["Node.js", "TypeScript", "React", "APIs", "CMS"],
    },
    {
      date: "2020",
      role: "Software Engineer (Backend)",
      org: "Cognizant",
      bullets: [
        "Selected for enterprise consulting engagement following technical training, completing onboarding and deployment readiness for a confidential client initiative.",
      ],
      tags: ["Java", "Backend Development", "Enterprise Consulting"],
    },
    {
      date: "2019 - 2020",
      role: "Software Engineer (Full Stack)",
      org: "Revature",
      bullets: [
        "Built collaborative full-stack applications in an accelerated software engineering environment focused on enterprise development practices.",
        "Produced internal projects using Java, Spring Framework, Angular, Node.js, JavaScript, HTML, and CSS, delivering production-style solutions in agile team environments.",
      ],
      tags: ["Java", "Spring Framework", "Angular", "Node.js", "Agile"],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 overflow-x-clip">
      <div className="max-w-4xl mx-auto w-full min-w-0">
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
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-indigo)] mb-2">
              <Terminal className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="tail -f /var/log/impact.log"
                active={commandStarted}
                speed={35}
                className="text-[var(--accent-indigo)]"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Engineering Impact
            </h2>

            <p className="text-muted-foreground text-lg">
              A record of systems built, scaled, and maintained.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl font-mono text-sm shadow-sm overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center bg-muted/50 border-b border-border px-4 py-3 min-h-[45px]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <span className="ml-2 text-muted-foreground text-xs">
                  impact.log
                </span>
              </div>

              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-xs text-teal-500">Logging active</span>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.org}-${exp.date}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3 md:mb-4">
                    <span className="text-[var(--accent-indigo)] font-bold text-sm shrink-0 md:w-32">
                      [{exp.date}]
                    </span>

                    <div className="flex-1">
                      <span className="text-foreground font-bold text-base block sm:inline">
                        {exp.role}
                      </span>

                      <span className="text-muted-foreground sm:ml-2 text-sm sm:text-base">
                        @ {exp.org}
                      </span>
                    </div>
                  </div>

                  <div className="ml-2 pl-4 border-l border-border md:border-none md:pl-0 md:ml-[144px]">
                    <ul className="space-y-3 text-muted-foreground relative md:before:absolute md:before:inset-y-0 md:before:-left-4 md:before:w-px md:before:bg-border mb-4">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li
                          key={bIndex}
                          className="relative before:absolute before:w-2 md:before:h-px before:h-0 md:before:bg-border before:-left-4 before:top-2.5 list-disc md:list-none ml-4 md:ml-0"
                        >
                          <span className="relative -left-2 md:left-0 block">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 bg-accent/50 border border-border/50 rounded text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simple Log Footer */}
            <div className="bg-muted/10 border-t border-border px-6 py-4 flex items-center gap-2 text-muted-foreground text-xs">
              <span className="text-teal-500 animate-pulse">_</span>
              <span>Waiting for new log entries...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}