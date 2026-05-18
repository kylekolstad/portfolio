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

  const featuredProject = {
    title: "Enterprise Knowledge Assistant",
    description:
      "Retrieval-Augmented Generation (RAG) platform for document search and contextual Q&A using vector search and LLM APIs.",
    bullets: [
      {
        text: "Designed secure ingestion flows for documents, embeddings, and metadata indexing",
        icon: ShieldCheck,
      },
      {
        text: "Built retrieval pipelines that ground responses in source documents instead of generic model output",
        icon: SearchCheck,
      },
      {
        text: "Structured the backend for authenticated access, reusable APIs, and enterprise-scale search workflows",
        icon: Network,
      },
    ],
    tags: [
      "Python",
      "LLM APIs",
      "Vector Search",
      "RAG",
      "REST APIs",
      "PostgreSQL",
    ],
    metadata: [
      { label: "AI", icon: Cpu },
      { label: "API", icon: Server },
      { label: "Database", icon: Database },
      { label: "Auth", icon: Lock },
    ],
  };

  const projects = [
    {
      title: "Intelligent Document Automation",
      description:
        "AI-powered document extraction service that converts PDFs into structured data using LLM APIs.",
      bullets: [
        {
          text: "Converted unstructured PDFs into clean, structured data for downstream systems",
          icon: FileJson,
        },
        {
          text: "Created secure API workflows for ingestion, extraction, review, and integration",
          icon: Workflow,
        },
      ],
      tags: ["Python", "LLMs", "FastAPI", "ETL Pipelines"],
      metadata: [
        { label: "API", icon: Server },
        { label: "AI", icon: Cpu },
      ],
    },
    {
      title: "Enterprise Integration Services",
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

            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start [transform-style:preserve-3d]">
              <div className="flex-1 min-w-0 w-full">
                <div className="mb-6">
                  <CardItem
                    translateZ={35}
                    className="mb-3 inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-indigo)]"
                  >
                    <Award className="w-3.5 h-3.5" />
                    spotlight_build
                  </CardItem>

                  <CardItem
                    translateZ={50}
                    as="h3"
                    className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-[var(--accent-indigo)] transition-colors"
                  >
                    {featuredProject.title}
                  </CardItem>

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
                  <button className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:opacity-90 hover:shadow-md hover:-translate-y-0.5">
                    Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5">
                    <Github className="w-4 h-4" />
                    GitHub
                  </button>
                </CardItem>
              </div>

              {/* Mini System Map */}
              <CardItem
                translateZ={80}
                className="hidden md:flex lg:w-[320px] shrink-0 bg-background/50 rounded-xl p-4 md:p-6 border border-border/50 h-fit w-full flex flex-col min-w-0 overflow-hidden transition-all duration-300 group-hover:border-border group-hover:bg-background/70 group-hover:shadow-xl"
              >
                <div className="text-xs font-mono text-muted-foreground mb-8 flex items-center gap-2">
                  system_architecture
                </div>

                <div className="relative flex-1 flex flex-col items-center justify-between py-2 gap-6">
                  <motion.div
                    className="absolute top-2 bottom-2 left-1/2 w-px bg-border/80 -translate-x-1/2"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10 px-4 py-2 bg-card/80 backdrop-blur-sm border border-[var(--accent-indigo)]/40 rounded-lg shadow-sm text-xs font-mono flex items-center gap-2 text-[var(--accent-indigo)] transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1">
                    <Cloud className="w-3.5 h-3.5" />
                    API Gateway
                  </div>

                  <div className="relative z-10 w-full flex justify-between px-2">
                    <div className="absolute top-1/2 left-1/2 w-2/3 h-px bg-border/80 -translate-x-1/2 -translate-y-1/2 -z-10" />

                    <div className="px-3 py-1.5 bg-card/80 backdrop-blur-sm border border-border/80 rounded text-[10px] font-mono flex items-center gap-1.5 text-foreground shadow-sm transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1">
                      <Server className="w-3 h-3 text-muted-foreground" />
                      Core Services
                    </div>

                    <div className="px-3 py-1.5 bg-card/80 backdrop-blur-sm border border-border/80 rounded text-[10px] font-mono flex items-center gap-1.5 text-teal-600 dark:text-teal-400 shadow-sm transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1">
                      <Lock className="w-3 h-3" />
                      OAuth
                    </div>
                  </div>

                  <div className="relative z-10 px-4 py-2 bg-card/80 backdrop-blur-sm border border-[var(--accent-violet)]/40 rounded-lg shadow-sm text-xs font-mono flex items-center gap-2 text-[var(--accent-violet)] transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1">
                    <Database className="w-3.5 h-3.5" />
                    PostgreSQL Cluster
                  </div>

                  <div className="relative z-10 px-4 py-1.5 bg-transparent border border-dashed border-muted-foreground/40 rounded text-[10px] font-mono flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1">
                    Vendor APIs (SFTP)
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

                        <CardItem translateZ={45}>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardItem>
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
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg text-sm transition-all duration-300 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </button>

                      <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-border rounded-lg text-sm transition-all duration-300 hover:bg-card hover:border-border hover:shadow-md hover:-translate-y-0.5">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
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
            <button className="group inline-flex items-center gap-2 px-5 py-3 bg-card/80 backdrop-blur-sm border border-border/80 rounded-xl text-sm font-medium shadow-sm transition-all duration-300 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1">
              View all projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
