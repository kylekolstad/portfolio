"use client";

import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Database,
  Cloud,
  Lock,
  Server,
  Cpu,
  Terminal,
  ArrowRight,
  Award,
  ShieldCheck,
  Workflow,
  Network,
  SearchCheck,
  FileJson,
} from "lucide-react";
import { useState } from "react";
import { TypingCommand } from "./ui/typing-command";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { EncryptedText } from "@/components/ui/encrypted-text";
import {
  actionReveal,
  cardReveal,
  contentGrid,
  copyReveal,
  headingReveal,
  introContainer,
  panelReveal,
  panelTransition,
  sectionViewport,
  smoothSpring,
  terminalLabel,
} from "@/lib/motion";

export function ProjectsSection() {
  const [commandStarted, setCommandStarted] = useState(false);
  const githubUrl = "https://github.com/kylekolstad";
  const contactHref = "#contact";

  const featuredProject = {
    title: "Enterprise Knowledge Assistant",
    status: "In Progress",
    description:
      "In-development RAG platform designed to make internal knowledge easier to search, verify, and reuse through source-grounded document Q&A.",
    bullets: [
      {
        text: "Built to help users find answers inside documents without manually searching across disconnected files",
        icon: ShieldCheck,
      },
      {
        text: "Designing ingestion, embeddings, and secure query workflows for controlled knowledge access",
        icon: SearchCheck,
      },
      {
        text: "Aimed at improving answer trust by grounding responses in retrieved source material",
        icon: Network,
      },
    ],
    tags: [
      "Python",
      "Vector Search",
      "RAG",
      "Prompt Design",
      "PostgreSQL",
    ],
    metadata: [
      { label: "Search", icon: Cpu },
      { label: "Backend", icon: Server },
      { label: "Sources", icon: Database },
      { label: "Secure", icon: Lock },
    ],
    caseStudyHref: contactHref,
    codeHref: githubUrl,
  };

  const projects = [
    {
      title: "Intelligent Document Automation Platform",
      status: "In Progress",
      description:
        "In-development document automation service built to convert PDFs into structured data for downstream workflows.",
      bullets: [
        {
          text: "Designed to reduce manual document review by automating ingestion, extraction, and downstream handoff",
          icon: FileJson,
        },
        {
          text: "Aimed at making document intelligence available through secure backend workflows",
          icon: Workflow,
        },
      ],
      tags: ["Python", "LLMs", "FastAPI", "ETL Pipelines"],
      metadata: [
        { label: "API", icon: Server },
        { label: "AI", icon: Cpu },
      ],
      demoHref: contactHref,
      codeHref: githubUrl,
    },
    {
      title: "Enterprise Integration Services",
      status: "Production Work",
      description:
        "Production integration work built to move institutional data reliably across a 500+ enterprise ecosystem.",
      bullets: [
        {
          text: "Delivered 25 integrations supporting secure, high-volume data exchange across enterprise platforms",
          icon: Network,
        },
        {
          text: "Improved reliability with monitoring, logging, and error recovery for production automation pipelines",
          icon: ShieldCheck,
        },
      ],
      tags: ["Java", "Spring Boot", "Backend Services", "OAuth", "Automation"],
      metadata: [
        { label: "Scale", icon: Cloud },
        { label: "Automation", icon: Server },
      ],
      demoHref: contactHref,
      codeHref: githubUrl,
    },
    {
      title: "Reusable Component Framework",
      description:
        "Reusable web framework work that reduced repeated setup and made custom application delivery more efficient.",
      bullets: [
        {
          text: "Reduced typical project staffing from 3 developers to 1 by standardizing repeatable build patterns",
          icon: Terminal,
        },
        {
          text: "Supported high-traffic web platforms for e-commerce and multi-location businesses",
          icon: Database,
        },
      ],
      tags: ["React", "TypeScript", "Node.js", "CMS"],
      metadata: [
        { label: "Frontend", icon: Terminal },
        { label: "Backend", icon: Server },
      ],
      demoHref: contactHref,
      codeHref: githubUrl,
    },
  ];

  const visibleProjects = projects.slice(0, 2);

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full min-w-0">
        <motion.div
          viewport={sectionViewport}
          onViewportEnter={() => {
            setCommandStarted(true);
          }}
          className="w-full min-w-0"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={introContainer()}
            className="mb-12 min-w-0"
          >
            <motion.div
              variants={terminalLabel}
              className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] mb-2 min-w-0"
            >
              <Terminal className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="ls /projects"
                active={commandStarted}
                speed={28}
                className="text-[var(--accent-green)]"
              />
            </motion.div>

            <div className="flex flex-col gap-4">
              <div>
                <motion.h2
                  variants={headingReveal}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold"
                >
                  <EncryptedText
                    text="Featured Work"
                    encryptedClassName="text-muted-foreground"
                    revealedClassName="text-foreground"
                  />
                </motion.h2>

                <motion.p
                  variants={copyReveal}
                  className="mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl"
                >
                  Work focused on production value: reliable data movement,
                  less manual effort, easier access to information, and systems
                  that hold up beyond launch.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={panelReveal}
            transition={{ ...panelTransition, delay: 0.24 }}
            className="mb-8"
          >
            <CardContainer
              containerClassName="block py-0"
              className="w-full"
              rotationStrength={130}
            >
                <CardBody className="apple-motion h-auto w-full rounded-xl border-t-2 border-t-[var(--accent-indigo)] border-x border-b border-border/80 bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 group relative overflow-hidden shadow-sm hover:border-border hover:bg-card hover:shadow-xl dark:hover:shadow-emerald-500/[0.08]">
                  <div className="apple-fade pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--glow-indigo)] via-transparent to-transparent opacity-[0.035] group-hover:opacity-[0.06]" />

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 items-start [transform-style:preserve-3d]">
              <div className="flex-1 min-w-0 w-full">
                <div className="mb-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <CardItem
                      translateZ={35}
                      className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-indigo)]"
                    >
                      <Award className="w-3.5 h-3.5" />
                      spotlight_build
                    </CardItem>
                  </div>

                  <div className="mb-3">
                    <CardItem
                      translateZ={50}
                      as="h3"
                      className="apple-color text-xl sm:text-2xl font-semibold group-hover:text-[var(--accent-indigo)]"
                    >
                      {featuredProject.title}
                    </CardItem>
                  </div>

                  <CardItem
                    translateZ={45}
                    as="p"
                    className="text-muted-foreground text-sm sm:text-base leading-relaxed"
                  >
                    {featuredProject.description}
                  </CardItem>
                </div>

                <CardItem
                  translateZ={30}
                  as="ul"
                  className="space-y-3 text-sm text-muted-foreground mb-6"
                >
                  {featuredProject.bullets.map((bullet) => (
                    <li key={bullet.text} className="flex items-start gap-2.5">
                      <span className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-teal-500/10 border border-teal-500/20 text-teal-500">
                        <bullet.icon className="h-3 w-3" />
                      </span>

                      <span className="leading-relaxed">{bullet.text}</span>
                    </li>
                  ))}
                </CardItem>

                <CardItem
                  translateZ={25}
                  className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border/50"
                >
                  {featuredProject.metadata.map((item) => (
                    <div
                      key={item.label}
                      className="apple-color flex items-center gap-1.5 text-sm text-muted-foreground font-mono hover:text-foreground"
                    >
                      <item.icon className="w-4 h-4 text-[var(--accent-indigo)]" />
                      <span>{item.label}</span>
                    </div>
                  ))}

                </CardItem>

                <CardItem translateZ={25} className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="apple-motion px-2.5 py-1 bg-accent/50 text-xs rounded-md font-mono text-muted-foreground border border-border/50 hover:border-border hover:bg-card hover:text-foreground hover:shadow-sm hover:-translate-y-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </CardItem>

                <CardItem translateZ={35} className="flex w-full flex-col sm:flex-row flex-wrap gap-3">
                  <motion.a
                    href={featuredProject.caseStudyHref}
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ y: -1, scale: 0.99 }}
                    transition={smoothSpring}
                    className="w-full sm:w-auto justify-center px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium flex items-center gap-2"
                  >
                    Case Study
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    href={featuredProject.codeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ y: -1, scale: 0.99 }}
                    transition={smoothSpring}
                    className="w-full sm:w-auto justify-center px-4 py-2 border border-border rounded-lg text-sm font-medium flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </CardItem>
              </div>

              {/* Project Snapshot */}

              <CardItem
                translateZ={80}
                className="apple-motion hidden md:flex lg:w-[410px] xl:w-[460px] shrink-0 bg-muted/50 rounded-xl p-4 md:p-6 border border-border h-fit w-full flex-col min-w-0 overflow-hidden group-hover:bg-muted/60 group-hover:shadow-xl"
              >
                <div className="mb-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-muted-foreground">
                        project_snapshot
                      </div>
                      <div className="mt-2 text-lg font-semibold text-foreground">
                        Document Q&A in development
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {featuredProject.status ? (
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/50 px-2 py-0.5 text-xs font-mono text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/80" />
                          {featuredProject.status}
                        </span>
                      ) : (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-indigo)]/30 bg-[var(--accent-indigo)]/10 text-[var(--accent-indigo)]">
                          <SearchCheck className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 border-y border-border/50 py-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      Mode
                    </div>
                    <div className="mt-1 text-sm font-medium">Document Q&A</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      Access
                    </div>
                    <div className="mt-1 text-sm font-medium">Authenticated</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      Retrieval
                    </div>
                    <div className="mt-1 text-sm font-medium">Vector search</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      Backend
                    </div>
                    <div className="mt-1 text-sm font-medium">Backend services</div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Database className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-indigo)]" />
                    <span>Embeddings, document metadata, and source references stay searchable.</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                    <span>Responses point back to indexed source material.</span>
                  </div>
                </div>
              </CardItem>
            </div>
                </CardBody>
            </CardContainer>
          </motion.div>

          {/* Secondary Projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={contentGrid(0.1)}
            className="grid md:grid-cols-2 gap-6 min-w-0"
          >
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardReveal}
                className="h-full"
              >
                <CardContainer
                  containerClassName="block py-0 h-full"
                  className="h-full w-full"
                  rotationStrength={25}
                >
                  <CardBody className="apple-motion bg-card/80 backdrop-blur-sm border-t-2 border-t-border border-x border-b border-border/80 rounded-xl p-4 sm:p-6 group flex h-full w-full flex-col shadow-sm hover:border-t-[var(--accent-indigo)] hover:border-border hover:bg-card hover:shadow-xl relative overflow-hidden">
                    <div className="apple-fade absolute inset-0 bg-gradient-to-br from-[var(--glow-indigo)] via-transparent to-transparent opacity-0 group-hover:opacity-[0.035]" />

                    <div className="relative flex-1">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <CardItem
                          as="h4"
                          translateZ={35}
                          className="apple-color text-lg font-semibold group-hover:text-[var(--accent-indigo)]"
                        >
                          {project.title}
                        </CardItem>

                        <div className="flex items-center gap-2 shrink-0">
                          {project.status ? (
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/50 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/80" />
                              {project.status}
                            </span>
                          ) : null}

                          <CardItem translateZ={45}>
                            <ExternalLink className="apple-fade w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
                          </CardItem>
                        </div>
                      </div>

                      <CardItem
                        as="p"
                        translateZ={30}
                        className="text-muted-foreground text-sm mb-4 leading-relaxed"
                      >
                        {project.description}
                      </CardItem>

                      <CardItem
                        as="ul"
                        translateZ={25}
                        className="space-y-3 text-xs text-muted-foreground mb-5"
                      >
                        {project.bullets.map((bullet) => (
                          <li key={bullet.text} className="flex items-start gap-2">
                            <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] bg-teal-500/10 border border-teal-500/20 text-teal-500">
                              <bullet.icon className="h-2.5 w-2.5" />
                            </span>

                            <span className="leading-relaxed">{bullet.text}</span>
                          </li>
                        ))}
                      </CardItem>

                      <CardItem
                        translateZ={25}
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="apple-motion px-2 py-0.5 bg-accent/50 text-xs rounded font-mono text-muted-foreground border border-border/50 hover:border-border hover:bg-card hover:text-foreground hover:shadow-sm hover:-translate-y-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </CardItem>
                    </div>

                    <CardItem
                      translateZ={35}
                      className="relative flex flex-col sm:flex-row gap-2 pt-4 border-t border-border/50 mt-auto w-full"
                    >
                      <motion.a
                        href={project.demoHref}
                        whileHover={{ y: -3, scale: 1.01 }}
                        whileTap={{ y: -1, scale: 0.99 }}
                        transition={smoothSpring}
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2 bg-foreground text-background rounded-lg text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>

                      <motion.a
                        href={project.codeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.01 }}
                        whileTap={{ y: -1, scale: 0.99 }}
                        transition={smoothSpring}
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={actionReveal}
            className="mt-10 flex justify-center"
          >
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ y: -1, scale: 0.99 }}
              transition={smoothSpring}
              className="group w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-indigo)] text-white rounded-lg text-sm font-medium shadow-lg shadow-[var(--glow-indigo)]"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
