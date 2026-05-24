"use client";

import { motion } from "motion/react";
import { Lock, FileDown, Briefcase, Terminal, Globe } from "lucide-react";
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

type SliderIcon = ComponentType<BrandIconProps>;

export function TechStackSection() {
  const [sectionCommandStarted, setSectionCommandStarted] = useState(false);
  const [showBrowserWindow, setShowBrowserWindow] = useState(false);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  const stackConfig = {
    languages: ["Java", "Python", "SQL", "JavaScript", "TypeScript"],
    backend: ["Spring Boot", "REST APIs", "OAuth2/JWT", "Node.js"],
    cloud_devops: ["AWS", "Docker", "CI/CD", "Linux", "Git"],
    data: ["PostgreSQL", "ETL", "Data Pipelines", "SQL"],
    ai_ml: ["LLMs", "RAG", "Vector Search", "Prompt Engineering", "AI APIs"],
    enterprise: [
      "Workday",
      "Workday Studio",
      "Constituo",
      "XML",
      "XSLT",
      "SFTP",
    ],
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
    { name: "Workday APIs", icon: Briefcase, color: "text-[#0875BE]" },
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
    window.setTimeout(() => {
      setShowBrowserWindow(true);
    }, 500);
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
          <div className="mb-8 sm:mb-12 min-w-0">
            <div className="flex items-center gap-2 text-sm font-mono text-[var(--accent-green)] mb-2 min-w-0">
              <Terminal className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="cat developer.config.ts"
                active={sectionCommandStarted}
                speed={35}
                className="text-[var(--accent-green)]"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <EncryptedText
                text="Technical Stack"
                encryptedClassName="text-muted-foreground"
                revealedClassName="text-foreground"
              />
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
              The core technologies I use to build robust software systems
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch w-full min-w-0">
            {/* Code Panel */}
            <div className="w-full min-w-0 lg:col-span-5 lg:self-stretch">
              <WindowFrame
                variant="file"
                title="developer.config.ts"
                className="flex h-full w-full min-w-0 flex-col"
                contentClassName="flex flex-1 flex-col overflow-hidden p-4"
              >
                <CodeFile lines={codeLines} />
              </WindowFrame>
            </div>

            {/* Runtime */}
            <div className="flex w-full min-w-0 lg:col-span-7 lg:self-stretch">
              <div className="flex min-h-0 w-full flex-col gap-5 lg:h-full">
                {/* Terminal Command Window */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full min-w-0 shrink-0"
                >
                  <RuntimeTerminal
                    title="Technology"
                    username="kyle@portfolio/stack"
                    runtimeEnvironment="npm"
                    className="max-w-none px-0"
                    commands={["npm run stack"]}
                    outputs={{
                      0: [
                        "ready: stack preview running",
                        "local: http://localhost:5173/stack-runtime",
                      ],
                    }}
                    typingSpeed={35}
                    initialDelay={350}
                    enableSound={false}
                    fitContent
                    showPromptOnComplete={false}
                    onComplete={handleRuntimeComplete}
                  />
                </motion.div>

                {/* Reserved Browser Preview Slot */}
                <div className="min-h-[260px] w-full min-w-0 sm:min-h-[340px] lg:min-h-0 lg:flex-1">
                  <motion.div
                    initial={false}
                    animate={
                      showBrowserWindow
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 10, scale: 0.985 }
                    }
                    transition={{ duration: 0.45 }}
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
                    <div className="relative h-full min-h-[215px] overflow-hidden bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] bg-card sm:min-h-[295px] lg:min-h-0">
                      <div className="absolute inset-y-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-y-0 right-0 w-8 sm:w-10 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

                      <div className="stack-marquee-stage h-full w-full overflow-visible flex flex-col justify-center gap-5 sm:gap-7 py-6 sm:py-8">
                        {/* Row 1 */}
                        <div className="stack-marquee-row relative w-full max-w-full overflow-x-hidden overflow-y-visible py-2">
                          <div
                            className="stack-marquee-track-left flex w-max will-change-transform"
                            style={{
                              animationPlayState: isSliderPaused
                                ? "paused"
                                : "running",
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
                                    onMouseEnter={() => setIsSliderPaused(true)}
                                    onMouseLeave={() => setIsSliderPaused(false)}
                                    onFocus={() => setIsSliderPaused(true)}
                                    onBlur={() => setIsSliderPaused(false)}
                                    className="flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-card/80 backdrop-blur-sm border border-border/80 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm shrink-0"
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
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Row 2 */}
                        <div className="stack-marquee-row relative w-full max-w-full overflow-x-hidden overflow-y-visible py-2">
                          <div
                            className="stack-marquee-track-right flex w-max will-change-transform"
                            style={{
                              animationPlayState: isSliderPaused
                                ? "paused"
                                : "running",
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
                                    onMouseEnter={() => setIsSliderPaused(true)}
                                    onMouseLeave={() => setIsSliderPaused(false)}
                                    onFocus={() => setIsSliderPaused(true)}
                                    onBlur={() => setIsSliderPaused(false)}
                                    className="flex items-center gap-2.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-card/80 backdrop-blur-sm border border-border/80 hover:border-border hover:bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow-sm shrink-0"
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
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
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
