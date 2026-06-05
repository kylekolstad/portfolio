"use client";

import { motion } from "motion/react";
import { Download, Terminal } from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { Experience } from "./ui/experience";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { WindowFrame } from "@/components/ui/window-frame";
import {
  actionReveal,
  appleEase,
  copyReveal,
  headingReveal,
  introContainer,
  panelReveal,
  panelTransition,
  sectionViewport,
  smoothSpring,
  terminalLabel,
} from "@/lib/motion";

export function ExperienceSection() {
  const [commandStarted, setCommandStarted] = useState(false);

  const entryReveal = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.64,
        ease: appleEase,
        opacity: { duration: 0.48, ease: "easeOut" },
      },
    },
  };

  const experiences = [
    {
      date: "2024 - Present",
      title: "Backend Engineer",
      subTitle: "Integration & Automation",
      org: "St. Norbert College",
      orgUrl: "https://www.snc.edu",
      bullets: [
        "Delivered 25 integrations within a 500+ enterprise ecosystem, enabling secure, high-volume data exchange across enterprise platforms.",
        "Engineered Java-based integration services for complex workflows, supporting scalable production automation and reliable system interoperability.",
        "Architected scalable Spring Boot REST APIs that centralized institutional data into a single source of truth, reducing dependency on 50+ systems and supporting high-volume, secure data processing.",
        "Implemented fault-tolerant automation pipelines with monitoring, logging, and error recovery, improving system reliability and reducing operational failures across enterprise integrations.",
      ],
      tags: ["Java", "Spring Boot", "Backend Services", "System Automation"],
    },
    {
      date: "2020 - 2023",
      title: "Software Engineer",
      subTitle: "Full Stack",
      org: "Envano",
      orgUrl: "https://www.envano.com",
      bullets: [
        "Developed custom web applications and backend APIs for high-traffic digital platforms, supporting e-commerce and multi-location businesses with scalable and performant solutions.",
        "Optimized backend services integrating external APIs, CMS platforms, and commerce systems, improving performance, responsiveness, and system scalability.",
        "Created a reusable component library and website framework that reduced typical project staffing from 3 developers to 1, significantly accelerating delivery and improving engineering efficiency.",
      ],
      tags: ["Node.js", "TypeScript", "React", "Backend Services", "CMS"],
    },
    {
      date: "2020",
      title: "Software Engineer",
      subTitle: "Backend",
      org: "Cognizant",
      orgUrl: "https://www.cognizant.com",
      bullets: [
        "Selected for enterprise consulting engagement following technical training, completing onboarding and deployment readiness for a confidential client initiative.",
      ],
      tags: ["Java", "Backend Development", "Enterprise Consulting"],
    },
    {
      date: "2019 - 2020",
      title: "Software Engineer",
      subTitle: "Full Stack",
      org: "Revature",
      orgUrl: "https://www.revature.com",
      bullets: [
        "Built collaborative full-stack applications in an accelerated software engineering environment focused on enterprise development practices and client delivery readiness.",
        "Produced internal projects using Java, Spring Framework, Angular, Node.js, JavaScript, HTML, and CSS, delivering production-style solutions in agile team environments.",
      ],
      tags: ["Java", "Spring Framework", "Angular", "Node.js", "Agile"],
    },
    {
      date: "2011 - 2015",
      title: "Bachelor of Science",
      subTitle: "Computer Science | Minor in Business (AACSB Accredited)",
      org: "University of Wisconsin-River Falls",
      orgUrl: "https://www.uwrf.edu",
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 overflow-x-clip">
      <div className="max-w-4xl mx-auto w-full min-w-0">
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
            <motion.div
              variants={terminalLabel}
              className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] mb-2"
            >
              <Terminal className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="tail -f /var/log/impact.log"
                active={commandStarted}
                speed={28}
                className="text-[var(--accent-green)]"
              />
            </motion.div>

            <motion.h2
              variants={headingReveal}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <EncryptedText
                text="Engineering Impact"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-foreground"
              />
            </motion.h2>

            <motion.p
              variants={copyReveal}
              className="text-muted-foreground text-lg"
            >
              Production work with measurable outcomes: 25 integrations
              delivered, high-volume secure data exchange, dependency on 50+
              systems reduced through a single source of truth, and reusable
              frameworks that cut typical staffing from 3 developers to 1.
            </motion.p>

            <motion.a
              variants={actionReveal}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ y: -1, scale: 0.99 }}
              transition={smoothSpring}
              href="https://files.kylekolstad.com/portfolio/resume/Kyle_Kolstad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 bg-[var(--accent-indigo)] text-white rounded-lg text-sm font-medium shadow-lg shadow-[var(--glow-indigo)]"
            >
              <Download className="w-4 h-4" />
              View Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={panelReveal}
            transition={{ ...panelTransition, delay: 0, duration: 0.64 }}
          >
          <WindowFrame
            variant="terminal"
            title="impact.log"
          >
            <motion.div
              className="p-6 md:p-8 space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={entryReveal}
                  transition={{ delay: index * 0.1 }}
                >
                  <Experience
                    date={exp.date}
                    title={exp.title}
                    org={exp.org}
                    orgUrl={exp.orgUrl}
                    bullets={exp.bullets}
                    tags={exp.tags}
                    subTitle={exp.subTitle}
                  />
                </motion.div>
              ))}
            </motion.div>
            {/* Simple Log Footer */}
            <div className="bg-muted/10 border-t border-border px-6 py-4 flex items-center gap-2 text-muted-foreground text-xs">
              <motion.span
                className="text-teal-500"
                whileInView={{ opacity: [0.35, 1, 0.35] }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
              >
                _
              </motion.span>
              <span>Waiting for new log entries...</span>
            </div>
          </WindowFrame>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
