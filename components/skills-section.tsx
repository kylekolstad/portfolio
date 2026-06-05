"use client";

import { motion } from "motion/react";
import { Briefcase, FileDown, Globe, Lock, Terminal } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import {
  AwsIcon,
  DockerIcon,
  GitHubActionsIcon,
  GitIcon,
  GoogleCloudIcon,
  HuggingFaceIcon,
  JavaIcon,
  LangChainIcon,
  LinuxIcon,
  NextJsIcon,
  NodeJsIcon,
  OpenAiIcon,
  PostgreSqlIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  SpringBootIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  ViteIcon,
  type BrandIconProps,
} from "./icons/brand-icons";
import { TypingCommand } from "./ui/typing-command";
import { Terminal as RuntimeTerminal } from "@/components/ui/terminal";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { CodeFile, type CodeFileLine } from "@/components/ui/code-file";
import { WindowFrame } from "@/components/ui/window-frame";
import {
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

type SliderIcon = ComponentType<BrandIconProps>;

export function TechStackSection() {
  const [sectionCommandStarted, setSectionCommandStarted] = useState(false);
  const [showBrowserWindow, setShowBrowserWindow] = useState(false);
  const [browserInView, setBrowserInView] = useState(false);

  const stackConfig = {
    languages: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
    backend: ["Spring Boot", "REST APIs", "OAuth2/JWT", "Node.js"],
    cloud_devops: ["AWS", "Docker", "CI/CD", "Linux", "Git"],
    data: ["PostgreSQL", "ETL", "Data Pipelines", "SQL"],
    ai_engineering: ["LLMs", "RAG", "Vector Search", "Prompt Engineering"],
    enterprise: ["Workday", "Workday Studio", "Constituo", "XML", "XSLT", "SFTP"],
  };

  const row1: Array<{ name: string; icon: SliderIcon; color: string }> = [
    { name: "Java", icon: JavaIcon, color: "text-[#007396]" },
    { name: "Spring Boot", icon: SpringBootIcon, color: "text-[#6DB33F]" },
    { name: "PostgreSQL", icon: PostgreSqlIcon, color: "text-[#4169E1]" },
    { name: "React", icon: ReactIcon, color: "text-[#61DAFB]" },
    { name: "TypeScript", icon: TypeScriptIcon, color: "text-[#3178C6]" },
    { name: "Tailwind CSS", icon: TailwindCssIcon, color: "text-[#06B6D4]" },
    { name: "Docker", icon: DockerIcon, color: "text-[#2496ED]" },
    { name: "Git", icon: GitIcon, color: "text-[#F05032]" },
    { name: "Postman", icon: PostmanIcon, color: "text-[#FF6C37]" },
    { name: "Linux", icon: LinuxIcon, color: "text-[#FCC624]" },
  ];

  const row2: Array<{ name: string; icon: SliderIcon; color: string }> = [
    { name: "Node.js", icon: NodeJsIcon, color: "text-[#5FA04E]" },
    { name: "Vite", icon: ViteIcon, color: "text-[#646CFF]" },
    { name: "Next.js", icon: NextJsIcon, color: "text-[#000000]" },
    {
      name: "GitHub",
      icon: GitHubActionsIcon,
      color: "text-[#000000] dark:text-[#FFFFFF]",
    },
    { name: "AWS", icon: AwsIcon, color: "text-[#FF9900]" },
    { name: "GCP", icon: GoogleCloudIcon, color: "text-[#4285F4]" },
    {
      name: "OpenAI",
      icon: OpenAiIcon,
      color: "text-[#000000] dark:text-[#FFFFFF]",
    },
    { name: "LangChain", icon: LangChainIcon, color: "text-[#1C3C3C]" },
    { name: "Hugging Face", icon: HuggingFaceIcon, color: "" },
    { name: "Redis", icon: RedisIcon, color: "" },
    { name: "Python", icon: PythonIcon, color: "text-[#3776AB]" },
    { name: "OAuth", icon: Lock, color: "text-muted-foreground" },
    { name: "SFTP", icon: FileDown, color: "text-muted-foreground" },
    { name: "Enterprise", icon: Briefcase, color: "text-[#0875BE]" },
  ];

  const syntax = {
    keyword: "text-[var(--accent-indigo)]",
    variable: "text-[#001080] dark:text-[#9CDCFE]",
    property: "text-[#0451A5] dark:text-[#9CDCFE]",
    string: "text-[#A31515] dark:text-[#CE9178]",
    punctuation: "text-[#000000] dark:text-[#D4D4D4]",
    operator: "text-[#000000] dark:text-[#D4D4D4]",
  };

  const codeLines: CodeFileLine[] = [
    {
      id: "export",
      content: (
        <>
          <span className={syntax.keyword}>export</span>
          <span> </span>
          <span className={syntax.keyword}>const</span>
          <span> </span>
          <span className={syntax.variable}>stack</span>
          <span> </span>
          <span className={syntax.operator}>=</span>
          <span> </span>
          <span className={syntax.punctuation}>{"{"}</span>
        </>
      ),
    },
  ];

  Object.entries(stackConfig).forEach(([category, items], categoryIndex) => {
    codeLines.push({
      id: `${category}-open`,
      content: (
        <>
          <span>  </span>
          <span className={syntax.property}>{category}</span>
          <span className={syntax.punctuation}>: [</span>
        </>
      ),
    });

    codeLines.push({
      id: `${category}-items`,
      content: (
        <>
          <span>    </span>
          {items.map((item, itemIndex) => (
            <span key={`${category}-${item}`}>
              <span className={syntax.string}>"{item}"</span>

              {itemIndex < items.length - 1 && (
                <>
                  <span className={syntax.punctuation}>,</span>
                  <span> </span>
                </>
              )}
            </span>
          ))}
        </>
      ),
    });

    codeLines.push({
      id: `${category}-close`,
      content: (
        <>
          <span>  </span>
          <span className={syntax.punctuation}>]</span>

          {categoryIndex < Object.entries(stackConfig).length - 1 && (
            <span className={syntax.punctuation}>,</span>
          )}
        </>
      ),
    });
  });

  codeLines.push({
    id: "close",
    content: <span className={syntax.punctuation}>{"};"}</span>,
  });

  codeLines.push({
    id: "empty-line",
    content: <span>&nbsp;</span>,
  });

  function handleRuntimeComplete() {
    setShowBrowserWindow(true);
  }

  return (
    <section
      id="stack"
      className="py-24 sm:py-32 px-4 sm:px-6 bg-accent/20 dark:bg-accent/10 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto w-full min-w-0">
        <motion.div
          viewport={sectionViewport}
          onViewportEnter={() => {
            setSectionCommandStarted(true);
          }}
          className="w-full min-w-0"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={introContainer()}
            className="mb-8 sm:mb-12 min-w-0"
          >
            <motion.div
              variants={terminalLabel}
              className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] mb-2 min-w-0"
            >
              <Terminal className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="cat /stack.json"
                active={sectionCommandStarted}
                speed={28}
                className="text-[var(--accent-green)]"
              />
            </motion.div>

            <motion.h2
              variants={headingReveal}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              <EncryptedText
                text="Technical Stack"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-foreground"
              />
            </motion.h2>

            <motion.p
              variants={copyReveal}
              className="text-muted-foreground text-base sm:text-lg max-w-2xl"
            >
              Tools I use to build reliable backend systems, integrations,
              automation pipelines, and AI-enabled applications, with an
              emphasis on production readiness, secure data flow, and
              maintainable architecture.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch w-full min-w-0">
            {/* Code Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={panelReveal}
              transition={{ ...panelTransition, delay: 0.22 }}
              className="w-full min-w-0 lg:col-span-5 lg:self-stretch"
            >
              <WindowFrame
                variant="file"
                title="stack.json"
                className="flex h-full w-full min-w-0 flex-col"
                contentClassName="flex flex-1 flex-col overflow-hidden p-4"
              >
                <CodeFile lines={codeLines} />
              </WindowFrame>
            </motion.div>

            {/* Runtime */}
            <div className="flex w-full min-w-0 lg:col-span-7 lg:self-stretch">
              <div className="flex min-h-0 w-full flex-col gap-5 lg:h-full">
                {/* Terminal Command Window */}
                <div className="w-full min-w-0 shrink-0">
                  <RuntimeTerminal
                    title="Technology"
                    username="kyle@portfolio/stack"
                    runtimeEnvironment="npm"
                    className="max-w-none px-0"
                    contentClassName="overflow-hidden"
                    commands={["npm run stack"]}
                    outputs={{
                      0: [
                        "ready: stack preview running",
                        "local: http://localhost:5173/stack-runtime",
                      ],
                    }}
                    typingSpeed={18}
                    initialDelay={140}
                    enableSound={false}
                    waitForEntrance={false}
                    entranceDelay={0}
                    reserveFinalHeight
                    maxReservedHeightVh={34}
                    fitContent
                    showPromptOnComplete={false}
                    onComplete={handleRuntimeComplete}
                  />
                </div>

                {/* Reserved Browser Preview Slot */}
                <div className="min-h-[260px] w-full min-w-0 sm:min-h-[340px] lg:min-h-0 lg:flex-1">
                  <motion.div
                    initial={false}
                    animate={
                      showBrowserWindow
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 16, scale: 0.985 }
                    }
                    viewport={{ once: false, amount: 0.2 }}
                    onViewportEnter={() => setBrowserInView(true)}
                    onViewportLeave={() => setBrowserInView(false)}
                    transition={{ delay: 0.1, duration: 0.68, ease: appleEase, opacity: { duration: 0.56, ease: "easeOut" } }}
                    aria-hidden={!showBrowserWindow}
                    className={`w-full min-w-0 h-full ${
                      showBrowserWindow
                        ? "pointer-events-auto"
                        : "pointer-events-none"
                    }`}
                  >
                    <WindowFrame
                      variant="browser"
                      className="h-full w-full min-w-0"
                      contentClassName="h-[calc(100%-45px)]"
                      address={
                        <div className="flex min-w-0 items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-1.5 text-xs font-mono text-muted-foreground">
                        <Globe className="w-3.5 h-3.5 shrink-0 text-[var(--accent-indigo)]" />

                        <span className="truncate">
                          http://localhost:5173/stack-runtime
                        </span>
                        </div>
                      }
                    >

                    {/* Browser Body */}
                    <div className="relative h-full min-h-[215px] overflow-hidden bg-[radial-gradient(rgba(15,23,42,0.07)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px] bg-card sm:min-h-[295px] lg:min-h-0">
                      <div className="absolute inset-y-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-y-0 right-0 w-8 sm:w-10 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

                      <div className="h-full w-full overflow-visible flex flex-col justify-center gap-5 sm:gap-7 py-6 sm:py-8">
                        {/* Row 1 */}
                        <div className="relative w-full max-w-full overflow-x-hidden overflow-y-visible py-2">
                          <motion.div
                            className="flex w-max will-change-transform"
                            animate={
                              showBrowserWindow && browserInView
                                ? { x: ["0%", "-50%"] }
                                : { x: "0%" }
                            }
                            transition={
                              showBrowserWindow && browserInView
                                ? { duration: 44, ease: "linear", repeat: Infinity }
                                : { duration: 0 }
                            }
                          >
                            {[1, 2].map((set) => (
                              <div
                                key={set}
                                className="flex gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0"
                              >
                                {row1.map((tech) => (
                                  <motion.div
                                    key={`${tech.name}-${set}`}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    whileTap={{ y: -2, scale: 0.99 }}
                                    transition={smoothSpring}
                                    className="flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-card/80 backdrop-blur-sm border border-border/80 rounded-2xl shadow-sm shrink-0"
                                  >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                                      <tech.icon
                                        size="100%"
                                        className={`h-full w-full ${tech.color}`}
                                      />
                                    </span>

                                    <span className="text-sm sm:text-lg font-medium text-foreground whitespace-nowrap">
                                      {tech.name}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="relative w-full max-w-full overflow-x-hidden overflow-y-visible py-2">
                          <motion.div
                            className="flex w-max will-change-transform"
                            animate={
                              showBrowserWindow && browserInView
                                ? { x: ["-50%", "0%"] }
                                : { x: "-50%" }
                            }
                            transition={
                              showBrowserWindow && browserInView
                                ? { duration: 48, ease: "linear", repeat: Infinity }
                                : { duration: 0 }
                            }
                          >
                            {[1, 2].map((set) => (
                              <div
                                key={set}
                                className="flex gap-3 sm:gap-4 pr-3 sm:pr-4 shrink-0"
                              >
                                {row2.map((tech) => (
                                  <motion.div
                                    key={`${tech.name}-${set}`}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    whileTap={{ y: -2, scale: 0.99 }}
                                    transition={smoothSpring}
                                    className="flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-card/80 backdrop-blur-sm border border-border/80 rounded-2xl shadow-sm shrink-0"
                                  >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                                      <tech.icon
                                        size="100%"
                                        className={`h-full w-full ${tech.color}`}
                                      />
                                    </span>

                                    <span className="text-sm sm:text-lg font-medium text-foreground whitespace-nowrap">
                                      {tech.name}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    </WindowFrame>
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
