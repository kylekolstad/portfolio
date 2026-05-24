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

export function ProjectsSection() {
  const [commandStarted, setCommandStarted] = useState(false);
  const githubUrl = "https://github.com/kylekolstad";
  const contactHref = "#contact";

  const featuredProject = {
    title: "Enterprise Knowledge Assistant",
    status: "In Progress",
    description:
      "Retrieval-Augmented Generation (RAG) platform for document search and contextual Q&A using vector search and LLM APIs.",
    bullets: [
      {
        text: "Architecting secure backend APIs for document ingestion, embeddings, and query workflows",
        icon: ShieldCheck,
      },
      {
        text: "Implementing retrieval pipelines that ground responses in source documents instead of generic model output",
        icon: SearchCheck,
      },
      {
        text: "Designing authenticated workflows for enterprise-scale knowledge access",
        icon: Network,
      },
    ],
    tags: [
      "Python",
      "LLM APIs",
      "Vector Search",
      "RAG",
      "Prompt Engineering",
      "REST APIs",
      "PostgreSQL",
    ],
    metadata: [
      { label: "AI", icon: Cpu },
      { label: "API", icon: Server },
      { label: "Database", icon: Database },
      { label: "Auth", icon: Lock },
    ],
    caseStudyHref: contactHref,
    codeHref: githubUrl,
  };

  const projects = [
    {
      title: "Intelligent Document Automation",
      status: "In Progress",
      description:
        "AI-powered document extraction service that converts PDFs into structured data using LLM APIs.",
      bullets: [
        {
          text: "Developing automated pipelines for ingestion, inference, and downstream system integration",
          icon: FileJson,
        },
        {
          text: "Enabling secure REST API integration for document intelligence workflows across enterprise applications",
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
      status: "In Progress",
      description:
        "Java-based integration services for complex workflows, supporting scalable production automation and secure data exchange.",
      bullets: [
        {
          text: "Connected enterprise systems through reliable API, SFTP, and vendor data workflows",
          icon: Network,
        },
        {
          text: "Improved production reliability with validation, logging, monitoring, and error recovery",
          icon: ShieldCheck,
        },
      ],
      tags: ["Java", "Spring Boot", "Workday", "OAuth", "SFTP"],
      metadata: [
        { label: "Cloud", icon: Cloud },
        { label: "Automation", icon: Server },
      ],
      demoHref: contactHref,
      codeHref: githubUrl,
    },
    {
      title: "Reusable Component Framework",
      description:
        "Custom web applications and backend APIs for high-traffic digital platforms, supporting scalable commerce solutions.",
      bullets: [
        {
          text: "Created reusable UI and backend patterns to reduce repeated project setup",
          icon: Terminal,
        },
        {
          text: "Integrated CMS, commerce, and external API services into maintainable web platforms",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => {
            setCommandStarted(true);
          }}
          className="w-full min-w-0"
        >
          <div className="mb-12 min-w-0">
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] mb-2 min-w-0">
              <Terminal className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="ls /projects"
                active={commandStarted}
                speed={35}
                className="text-[var(--accent-green)]"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <EncryptedText
                    text="Featured Work"
                    encryptedClassName="text-muted-foreground"
                    revealedClassName="text-foreground"
                  />
                </h2>

                <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl">
                  Selected systems, tools, and engineering projects built around
                  automation, integrations, APIs, and applied AI.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mb-8"
          >
            <CardContainer
              containerClassName="block py-0"
              className="w-full"
              rotationStrength={130}
            >
                <CardBody className="h-auto w-full rounded-xl border-t-2 border-t-[var(--accent-indigo)] border-x border-b border-border/80 bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 transition-all duration-300 group relative overflow-hidden shadow-sm hover:border-border hover:bg-card hover:shadow-xl dark:hover:shadow-emerald-500/[0.08]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--glow-indigo)] via-transparent to-transparent opacity-[0.035] transition-opacity duration-500 group-hover:opacity-[0.06]" />

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
                      className="text-xl sm:text-2xl font-semibold group-hover:text-[var(--accent-indigo)] transition-colors"
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
                      className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono hover:text-foreground transition-colors"
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
                      className="px-2.5 py-1 bg-accent/50 text-xs rounded-md font-mono text-muted-foreground border border-border/50 transition-all duration-300 hover:border-border hover:bg-card hover:text-foreground hover:shadow-sm hover:-translate-y-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </CardItem>

                <CardItem translateZ={35} className="flex flex-wrap gap-3">
                  <a
                    href={featuredProject.caseStudyHref}
                    className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:opacity-90 hover:shadow-md hover:-translate-y-0.5"
                  >
                    Case Study
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={featuredProject.codeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-border rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </CardItem>
              </div>

              {/* Project Snapshot */}

              <CardItem
                translateZ={80}
                className="hidden md:flex lg:w-[410px] xl:w-[460px] shrink-0 bg-muted/50 rounded-xl p-4 md:p-6 border border-border h-fit w-full flex-col min-w-0 overflow-hidden transition-all duration-300 group-hover:bg-muted/60 group-hover:shadow-xl"
              >
                <div className="mb-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-muted-foreground">
                        project_snapshot
                      </div>
                      <div className="mt-2 text-lg font-semibold text-foreground">
                        RAG platform in development
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
                    <div className="mt-1 text-sm font-medium">REST APIs</div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Database className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-indigo)]" />
                    <span>Embeddings, document metadata, and source references stay queryable.</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                    <span>Responses are grounded in indexed sources instead of loose model output.</span>
                  </div>
                </div>
              </CardItem>
            </div>
                </CardBody>
            </CardContainer>
          </motion.div>

          {/* Secondary Projects */}
          <div className="grid md:grid-cols-2 gap-6 min-w-0">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="h-full"
              >
                <CardContainer
                  containerClassName="block py-0 h-full"
                  className="h-full w-full"
                  rotationStrength={25}
                >
                  <CardBody className="bg-card/80 backdrop-blur-sm border-t-2 border-t-border border-x border-b border-border/80 rounded-xl p-4 sm:p-6 transition-all duration-300 group flex h-full w-full flex-col shadow-sm hover:border-t-[var(--accent-indigo)] hover:border-border hover:bg-card hover:shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-indigo)] via-transparent to-transparent opacity-0 group-hover:opacity-[0.035] transition-opacity duration-500" />

                    <div className="relative flex-1">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <CardItem
                          as="h4"
                          translateZ={35}
                          className="text-lg font-semibold group-hover:text-[var(--accent-indigo)] transition-colors"
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
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
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
                            className="px-2 py-0.5 bg-accent/50 text-xs rounded font-mono text-muted-foreground border border-border/50 transition-all duration-300 hover:border-border hover:bg-card hover:text-foreground hover:shadow-sm hover:-translate-y-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </CardItem>
                    </div>

                    <CardItem
                      translateZ={35}
                      className="relative flex gap-2 pt-4 border-t border-border/50 mt-auto w-full"
                    >
                      <a
                        href={project.demoHref}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-foreground text-background rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>

                      <a
                        href={project.codeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg text-sm transition-all duration-300 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>

          {/* View All Projects */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-indigo)] text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-lg shadow-[var(--glow-indigo)] hover:bg-[var(--accent-indigo)]/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              View all projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
