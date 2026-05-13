"use client";

import { motion } from "motion/react";
import { ArrowRight, Terminal, Activity } from "lucide-react";
import { useState } from "react";
import { TerminalPrompt } from "./ui/terminal-prompt";
import { TypingCommand } from "./ui/typing-command";

export function HeroSection() {
  const [profileCommandStarted, setProfileCommandStarted] = useState(false);

  const [terminalStarted, setTerminalStarted] = useState(false);
  const [showWhoamiOutput, setShowWhoamiOutput] = useState(false);
  const [showStackCommand, setShowStackCommand] = useState(false);
  const [showStackOutput, setShowStackOutput] = useState(false);
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);
  const [showStatusPanel, setShowStatusPanel] = useState(false);
  const [showAvailableStatus, setShowAvailableStatus] = useState(false);

  const jsonSyntax = {
    brace: "text-[#000000] dark:text-[#D4D4D4]",
    key: "text-[#0451A5] dark:text-[#9CDCFE]",
    string: "text-[#A31515] dark:text-[#CE9178]",
    punctuation: "text-[#000000] dark:text-[#D4D4D4]",
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  function handleWhoamiDone() {
    setShowWhoamiOutput(true);

    window.setTimeout(() => {
      setShowStackCommand(true);
    }, 650);
  }

  function handleStackDone() {
    setShowStackOutput(true);

    window.setTimeout(() => {
      setShowFinalPrompt(true);
    }, 650);

    window.setTimeout(() => {
      setShowStatusPanel(true);
    }, 900);

    window.setTimeout(() => {
      setShowAvailableStatus(true);
    }, 1100);
  }

  return (
    <section className="min-h-[100svh] flex items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-20 overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center min-w-0">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
            onAnimationComplete={() => {
              setProfileCommandStarted(true);
            }}
          >
            <div className="mb-6 flex items-center gap-2 text-sm font-mono text-[var(--accent-indigo)] min-w-0">
              <Terminal className="w-4 h-4 shrink-0" />

              <span className="shrink-0">$</span>

              <TypingCommand
                command="cat ./profile.json"
                active={profileCommandStarted}
                speed={35}
                className="text-[var(--accent-indigo)]"
              />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Building reliable{" "}
              <span className="text-[var(--accent-indigo)]">
                software systems
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Software engineer specializing in backend systems, APIs, cloud
              infrastructure, and applied AI. I build systems that scale
              cleanly.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="px-6 py-3 bg-[var(--accent-indigo)] text-white rounded-lg font-medium hover:bg-[var(--accent-indigo)]/90 transition-colors flex items-center gap-2 shadow-lg shadow-[var(--glow-indigo)]"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onAnimationComplete={() => {
              setTerminalStarted(true);
            }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto min-w-0"
          >
            {/* Main Editor Card */}
            <div
              className={`bg-card border border-border shadow-2xl overflow-hidden flex flex-col sm:h-[400px] min-w-0 transition-[border-radius] duration-300 ${
                showStatusPanel
                  ? "rounded-t-xl rounded-b-none sm:rounded-xl"
                  : "rounded-xl"
              }`}
            >
              {/* Fake Window Header */}
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
                      Developer Overview
                    </h3>
                  </div>
                </div>

                {showAvailableStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="ml-auto flex items-center gap-1.5 shrink-0"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <span className="text-xs text-teal-500">Coding</span>
                  </motion.div>
                )}
              </div>

              {/* Terminal Body */}
              <div className="p-4 md:p-5 font-mono text-sm overflow-hidden flex flex-col gap-5 bg-background min-w-0 sm:flex-1">
                {/* Command 1 */}
                <div className="space-y-3 min-w-0">
                  <TerminalPrompt
                    command="whoami"
                    typing
                    active={terminalStarted}
                    speed={45}
                    onDone={handleWhoamiDone}
                  />

                  {showWhoamiOutput && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="text-xs text-muted-foreground space-y-1.5 pl-4 border-l-2 border-border min-w-0"
                    >
                      <div>
                        <span className="text-foreground">name:</span>{" "}
                        Kyle Kolstad
                      </div>

                      <div>
                        <span className="text-foreground">role:</span>{" "}
                        Software Engineer
                      </div>

                      <div>
                        <span className="text-foreground">experience:</span>{" "}
                        6+ years
                      </div>

                      <div className="leading-relaxed">
                        <span className="text-foreground">focus:</span>{" "}
                        Backend Systems, APIs, Cloud Infrastructure, Applied AI
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Command 2 */}
                {showStackCommand && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2 mt-2 min-w-0"
                  >
                    <TerminalPrompt
                      command="cat core-stack.json"
                      typing
                      active={showStackCommand}
                      speed={38}
                      onDone={handleStackDone}
                    />

                    {showStackOutput && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="text-[11px] sm:text-xs bg-muted/30 p-3 rounded-lg border border-border/50 overflow-hidden min-w-0"
                      >
                        {/* Mobile JSON: vertical to avoid horizontal overflow */}
                        <div className="sm:hidden whitespace-pre">
                          <div>
                            <span className={jsonSyntax.brace}>{"{"}</span>
                          </div>
                          <div>
                            <span>  </span>
                            <span className={jsonSyntax.key}>"stack"</span>
                            <span className={jsonSyntax.punctuation}>: </span>
                            <span className={jsonSyntax.brace}>[</span>
                          </div>
                          <div>
                            <span>    </span>
                            <span className={jsonSyntax.string}>"Java"</span>
                            <span className={jsonSyntax.punctuation}>,</span>
                          </div>
                          <div>
                            <span>    </span>
                            <span className={jsonSyntax.string}>
                              "Spring Boot"
                            </span>
                            <span className={jsonSyntax.punctuation}>,</span>
                          </div>
                          <div>
                            <span>    </span>
                            <span className={jsonSyntax.string}>"React"</span>
                            <span className={jsonSyntax.punctuation}>,</span>
                          </div>
                          <div>
                            <span>    </span>
                            <span className={jsonSyntax.string}>
                              "TypeScript"
                            </span>
                            <span className={jsonSyntax.punctuation}>,</span>
                          </div>
                          <div>
                            <span>    </span>
                            <span className={jsonSyntax.string}>"Docker"</span>
                          </div>
                          <div>
                            <span>  </span>
                            <span className={jsonSyntax.brace}>]</span>
                          </div>
                          <div>
                            <span className={jsonSyntax.brace}>{"}"}</span>
                          </div>
                        </div>

                        {/* Desktop JSON: compact so final prompt stays visible */}
                        <div className="hidden sm:block whitespace-pre overflow-hidden">
                          <div>
                            <span className={jsonSyntax.brace}>{"{"}</span>
                          </div>
                          <div>
                            <span>  </span>
                            <span className={jsonSyntax.key}>"stack"</span>
                            <span className={jsonSyntax.punctuation}>: </span>
                            <span className={jsonSyntax.brace}>[</span>
                          </div>
                          <div>
                            <span>    </span>
                            <span className={jsonSyntax.string}>"Java"</span>
                            <span className={jsonSyntax.punctuation}>, </span>
                            <span className={jsonSyntax.string}>
                              "Spring Boot"
                            </span>
                            <span className={jsonSyntax.punctuation}>, </span>
                            <span className={jsonSyntax.string}>"React"</span>
                            <span className={jsonSyntax.punctuation}>, </span>
                            <span className={jsonSyntax.string}>
                              "TypeScript"
                            </span>
                            <span className={jsonSyntax.punctuation}>, </span>
                            <span className={jsonSyntax.string}>"Docker"</span>
                          </div>
                          <div>
                            <span>  </span>
                            <span className={jsonSyntax.brace}>]</span>
                          </div>
                          <div>
                            <span className={jsonSyntax.brace}>{"}"}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Final Prompt */}
                {showFinalPrompt && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2 mt-0 sm:mt-auto pt-1"
                  >
                    <TerminalPrompt showCursorOnly />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Attached Status Card */}
            {showStatusPanel && (
              <motion.div
                initial={{ opacity: 0, y: -1 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="sm:hidden bg-card border-x border-b border-border rounded-b-xl shadow-2xl overflow-hidden"
              >
                <div className="px-4 py-3 flex items-center gap-3 text-xs font-mono">
                  <div className="p-2 bg-teal-500/10 rounded-md shrink-0">
                    <Activity className="w-4 h-4 text-teal-500" />
                  </div>

                  <div className="min-w-0 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-bold text-foreground">Open</span>
                    <span className="text-muted-foreground">
                      to new opportunities
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Desktop Floating Status Card */}
            {showStatusPanel && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="hidden sm:flex absolute right-4 sm:-right-4 -bottom-4 sm:-bottom-6 bg-card border border-border rounded-lg shadow-xl p-3 items-center gap-3 w-40 sm:w-48 z-10"
              >
                <div className="p-2 bg-teal-500/10 rounded-md shrink-0">
                  <Activity className="w-4 h-4 text-teal-500" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-mono font-bold">Open</div>
                  <div className="text-[10px] text-muted-foreground">
                    to new opportunities
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
