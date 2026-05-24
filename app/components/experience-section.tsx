"use client";

import { motion } from "motion/react";
import { Download, Terminal } from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { Experience } from "./ui/experience";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { WindowFrame } from "@/components/ui/window-frame";

export function ExperienceSection() {
  const [commandStarted, setCommandStarted] = useState(false);

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
        "Architected scalable Spring Boot REST APIs that centralized institutional data into a single source of truth, reducing dependency on 50+ systems and supporting secure data processing.",
        "Implemented fault-tolerant automation pipelines with monitoring, logging, and error recovery, improving reliability across enterprise integrations.",
      ],
      tags: ["Java", "Spring Boot", "REST APIs", "Workday Studio", "Automation"],
    },
    {
      date: "2020 - 2023",
      title: "Software Engineer",
      subTitle: "Full Stack",
      org: "Envano",
      orgUrl: "https://www.envano.com",
      bullets: [
        "Developed custom web applications and backend APIs for high-traffic digital platforms, supporting e-commerce and multi-location businesses.",
        "Optimized backend services integrating external APIs, CMS platforms, and commerce systems, improving performance, responsiveness, and scalability.",
        "Created a reusable component library and website framework that reduced typical project staffing from 3 developers to 1, accelerating delivery and improving engineering efficiency.",
      ],
      tags: ["Node.js", "TypeScript", "React", "APIs", "CMS"],
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => {
            setCommandStarted(true);
          }}
        >
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] mb-2">
              <Terminal className="w-4 h-4" />

              <span>$</span>

              <TypingCommand
                command="tail -f /var/log/impact.log"
                active={commandStarted}
                speed={35}
                className="text-[var(--accent-green)]"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <EncryptedText
                text="Engineering Impact"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-foreground"
              />
            </h2>

            <p className="text-muted-foreground text-lg">
              A record of systems built, scaled, and maintained.
            </p>

            <a
              href="https://files.kylekolstad.com/portfolio/resume/Kyle_Kolstad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-[var(--accent-indigo)] text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-[var(--glow-indigo)] hover:bg-[var(--accent-indigo)]/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              View Resume
            </a>
          </div>

          <WindowFrame
            variant="terminal"
            title="impact.log"
          >
            <div className="p-6 md:p-8 space-y-12">
              {experiences.map((exp, index) => (
                <Experience
                  key={index}
                  date={exp.date}
                  title={exp.title}
                  org={exp.org}
                  orgUrl={exp.orgUrl}
                  bullets={exp.bullets}
                  tags={exp.tags}
                  subTitle={exp.subTitle}
                />
              ))}
            </div>
            {/* Simple Log Footer */}
            <div className="bg-muted/10 border-t border-border px-6 py-4 flex items-center gap-2 text-muted-foreground text-xs">
              <span className="text-teal-500 animate-pulse">_</span>
              <span>Waiting for new log entries...</span>
            </div>
          </WindowFrame>
        </motion.div>
      </div>
    </section>
  );
}
