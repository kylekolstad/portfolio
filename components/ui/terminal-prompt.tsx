"use client";

import { motion } from "motion/react";
import { TypingCommand } from "./typing-command";

type TerminalPromptProps = {
  command?: string;
  active?: boolean;
  typing?: boolean;
  showCursorOnly?: boolean;
  speed?: number;
  onDone?: () => void;
};

export function TerminalPrompt({
  command,
  active = false,
  typing = false,
  showCursorOnly = false,
  speed = 35,
  onDone,
}: TerminalPromptProps) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-[var(--accent-indigo)]">~/portfolio</span>
      <span className="text-muted-foreground">$</span>

      {showCursorOnly ? (
        <motion.span
          whileInView={{ opacity: [0, 1, 0] }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-3.5 w-1.5 bg-[var(--accent-indigo)]"
        />
      ) : typing && command ? (
        <TypingCommand
          command={command}
          active={active}
          speed={speed}
          onDone={onDone}
          className="text-foreground"
        />
      ) : (
        <span className="text-foreground">{command}</span>
      )}
    </div>
  );
}