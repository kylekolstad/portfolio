"use client";

import { motion } from "motion/react";
import { Lock, FileDown, Briefcase, Terminal, Globe } from "lucide-react";
import { useState } from "react";
import {
  SiSpringboot,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiPostman,
  SiVite,
  SiNextdotjs,
  SiGooglecloud,
  SiOpenai,
} from "react-icons/si";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaPython,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { TypingCommand } from "./ui/typing-command";
import { TerminalPrompt } from "./ui/terminal-prompt";

export function TechStackSection() {
  const [sectionCommandStarted, setSectionCommandStarted] = useState(false);
  const [runtimeCommandStarted, setRuntimeCommandStarted] = useState(false);
  const [showTerminalOutput, setShowTerminalOutput] = useState(false);
  const [showBrowserWindow, setShowBrowserWindow] = useState(false);
  const [showRunningStatus, setShowRunningStatus] = useState(false);

  const stackConfig = {
    languages: [
      "Java",
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript"
    ],
    backend: [
      "Spring Boot",
      "REST APIs",
      "OAuth2/JWT",
      "Node.js"
    ],
    cloud_devops: [
      "AWS",
      "Docker",
      "CI/CD",
      "Linux",
      "Git"
    ],
    data: [
      "PostgreSQL",
      "ETL",
      "Data Pipelines",
      "SQL"
    ],
    ai_ml: [
      "LLMs",
      "RAG",
      "Vector Search",
      "Prompt Engineering",
      "AI APIs",
    ],
    enterprise: [
      "Workday",
      "Workday APIs",
      "Workday Studio",
      "Constituo",
      "XML",
      "XSLT",
      "SFTP",
    ],
  };

  const row1 = [
    { name: "Java", icon: FaJava, color: "text-[#f89820]" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "Linux", icon: FaLinux, color: "text-[#FCC624]" },
  ];

  const row2 = [
    { name: "Node.js", icon: FaNodeJs, color: "text-[#5FA04E]" },
    { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
    {
      name: "GitHub Actions",
      icon: FaGithub,
      color: "text-[#181717] dark:text-white",
    },
    { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
    { name: "GCP", icon: SiGooglecloud, color: "text-[#4285F4]" },
    { name: "Azure", icon: VscAzure, color: "text-[#0078D4]" },
    {
      name: "OpenAI",
      icon: SiOpenai,
      color: "text-[#412991] dark:text-[#A78BFA]",
    },
    { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
    { name: "OAuth", icon: Lock, color: "text-muted-foreground" },
    { name: "SFTP", icon: FileDown, color: "text-muted-foreground" },
    { name: "Workday APIs", icon: Briefcase, color: "text-[#0875BE]" },
  ];

  const syntax = {
    keyword: "text-[#AF00DB] dark:text-[#C586C0]",
    variable: "text-[#001080] dark:text-[#9CDCFE]",
    property: "text-[#0451A5] dark:text-[#9CDCFE]",
    string: "text-[#A31515] dark:text-[#CE9178]",
    punctuation: "text-[#000000] dark:text-[#D4D4D4]",
    operator: "text-[#000000] dark:text-[#D4D4D4]",
  };

  function handleRuntimeCommandDone() {
    setShowTerminalOutput(true);

    window.setTimeout(() => {
      setShowBrowserWindow(true);
    }, 500);

    window.setTimeout(() => {
      setShowRunningStatus(true);
    }, 900);
  }

  return (
    <section
      id="stack"
      className="py-24 sm:py-32 px-4 sm:px-6 bg-accent/10 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => {
            setSectionCommandStarted(true);
          }}
          className="w-full min-w-0"
        >
          <div className="mb-12 min-w-0">
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-indigo)] mb-2 min-w-0">
              <Terminal className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="cat developer.config.ts"
                active={sectionCommandStarted}
                speed={35}
                className="text-[var(--accent-indigo)]"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technical Stack
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg">
              The core technologies I use to build robust software systems
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch w-full min-w-0">
            {/* Left: Code Panel */}
            <div className="lg:col-span-5 w-full min-w-0">
              <div className="bg-card border border-border rounded-xl shadow-xl overflow-hidden font-mono text-sm flex flex-col h-full w-full min-w-0">
                <div className="flex items-center gap-2 bg-muted/50 border-b border-border px-4 py-3 min-h-[45px]">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>

                  <span className="ml-2 text-muted-foreground text-xs truncate">
                    developer.config.ts
                  </span>
                </div>

                <div className="p-4 sm:p-6 overflow-hidden sm:overflow-x-auto text-[11px] sm:text-[13px] leading-relaxed flex-1 flex flex-col justify-center max-h-[460px] sm:max-h-none">
                  <div className="w-full sm:min-w-max whitespace-pre-wrap sm:whitespace-pre break-words">
                    <div>
                      <span className={syntax.keyword}>export</span>
                      <span> </span>
                      <span className={syntax.keyword}>const</span>
                      <span> </span>
                      <span className={syntax.variable}>stack</span>
                      <span> </span>
                      <span className={syntax.operator}>=</span>
                      <span> </span>
                      <span className={syntax.punctuation}>{"{"}</span>
                    </div>

                    {Object.entries(stackConfig).map(
                      ([category, items], categoryIndex) => (
                        <div key={category}>
                          <div>
                            <span>  </span>
                            <span className={syntax.property}>{category}</span>
                            <span className={syntax.punctuation}>: [</span>
                          </div>

                          <div className="pl-4 sm:pl-0">
                            <span className="hidden sm:inline">    </span>
                            {items.map((item, itemIndex) => (
                              <span
                                key={`${category}-${item}`}
                                className="block sm:inline"
                              >
                                <span className="sm:hidden">    </span>
                                <span className={syntax.string}>"{item}"</span>
                                {itemIndex < items.length - 1 && (
                                  <>
                                    <span className={syntax.punctuation}>,</span>
                                    <span className="hidden sm:inline"> </span>
                                  </>
                                )}
                              </span>
                            ))}
                          </div>

                          <div>
                            <span>  </span>
                            <span className={syntax.punctuation}>]</span>
                            {categoryIndex <
                              Object.entries(stackConfig).length - 1 && (
                              <span className={syntax.punctuation}>,</span>
                            )}
                          </div>
                        </div>
                      )
                    )}

                    <div>
                      <span className={syntax.punctuation}>{"};"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Terminal + Reserved Browser Preview */}
            <div className="lg:col-span-7 w-full min-w-0">
              <div className="h-full flex flex-col gap-5">
                {/* Terminal Command Window */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onAnimationComplete={() => {
                    setRuntimeCommandStarted(true);
                  }}
                  className="bg-card border border-border rounded-xl shadow-xl overflow-hidden w-full min-w-0"
                >
                  <div className="flex items-center bg-muted/50 border-b border-border px-4 py-3 min-h-[45px]">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>

                      <div className="flex items-center gap-2 min-w-0">
                        <Terminal className="w-4 h-4 text-[var(--accent-indigo)] shrink-0" />

                        <h3 className="font-semibold text-sm text-foreground truncate">
                          Terminal
                        </h3>
                      </div>
                    </div>

                    {showRunningStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -2 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="ml-auto flex items-center gap-1.5 shrink-0"
                      >
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span className="text-xs text-teal-500">Running</span>
                      </motion.div>
                    )}
                  </div>

                  <div className="px-4 sm:px-5 py-5 bg-background/50 font-mono text-sm overflow-hidden min-h-[132px]">
                    <TerminalPrompt
                      command="npm run stack"
                      typing
                      active={runtimeCommandStarted}
                      speed={35}
                      onDone={handleRuntimeCommandDone}
                    />

                    {showTerminalOutput && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="mt-4 space-y-2 pl-4 border-l-2 border-border text-xs text-muted-foreground"
                      >
                        <div>
                          <span className="text-teal-500">ready</span>{" "}
                          stack preview running
                        </div>

                        <div>
                          <span className="text-[var(--accent-indigo)]">
                            local
                          </span>{" "}
                          http://localhost:5173/stack-runtime
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Reserved Browser Preview Slot */}
                <div className="min-h-[300px] sm:min-h-[340px] lg:flex-1 w-full min-w-0">
                  <motion.div
                    initial={false}
                    animate={
                      showBrowserWindow
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 10, scale: 0.985 }
                    }
                    transition={{ duration: 0.45 }}
                    aria-hidden={!showBrowserWindow}
                    className={`bg-card border border-border rounded-xl shadow-xl overflow-hidden w-full min-w-0 h-full ${
                      showBrowserWindow
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                    }`}
                  >
                    {/* Browser Header */}
                    <div className="flex items-center gap-3 bg-muted/50 border-b border-border px-4 py-3 min-h-[45px]">
                      <div className="flex gap-1.5 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>

                      <div className="flex items-center gap-2 min-w-0 flex-1 rounded-md border border-border bg-background/70 px-3 py-1.5 text-xs font-mono text-muted-foreground">
                        <Globe className="w-3.5 h-3.5 shrink-0 text-[var(--accent-indigo)]" />

                        <span className="truncate">
                          http://localhost:5173/stack-runtime
                        </span>
                      </div>
                    </div>

                    {/* Browser Body */}
                    <div className="relative h-[255px] sm:h-[295px] lg:h-[calc(100%-45px)] overflow-hidden bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] bg-background/90">
                      <div className="absolute inset-y-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-y-0 right-0 w-8 sm:w-10 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                      <div className="h-full w-full overflow-hidden flex flex-col justify-evenly py-5 sm:py-6">
                        {/* Row 1 */}
                        <div className="relative w-full max-w-full overflow-hidden">
                          <motion.div
                            className="flex w-max will-change-transform"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                              duration: 42,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            {[1, 2].map((set) => (
                              <div
                                key={set}
                                className="flex gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0"
                              >
                                {row1.map((tech) => (
                                  <div
                                    key={`${tech.name}-${set}`}
                                    className="flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-card/80 backdrop-blur-sm border border-border/80 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm shrink-0"
                                  >
                                    <tech.icon
                                      className={`w-5 h-5 sm:w-8 sm:h-8 ${tech.color}`}
                                    />

                                    <span className="text-sm sm:text-lg font-medium text-foreground whitespace-nowrap">
                                      {tech.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="relative w-full max-w-full overflow-hidden">
                          <motion.div
                            className="flex w-max will-change-transform"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                              duration: 46,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            {[1, 2].map((set) => (
                              <div
                                key={set}
                                className="flex gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0"
                              >
                                {row2.map((tech) => (
                                  <div
                                    key={`${tech.name}-${set}`}
                                    className="flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-card/80 backdrop-blur-sm border border-border/80 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm shrink-0"
                                  >
                                    <tech.icon
                                      className={`w-5 h-5 sm:w-8 sm:h-8 ${tech.color}`}
                                    />

                                    <span className="text-sm sm:text-lg font-medium text-foreground whitespace-nowrap">
                                      {tech.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}