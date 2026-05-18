"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type TypingCommandProps = {
  command: string;
  active: boolean;
  speed?: number;
  cursorHideDelay?: number;
  onDone?: () => void;
  className?: string;
};

export function TypingCommand({
  command,
  active,
  speed = 35,
  cursorHideDelay = 300,
  onDone,
  className = "",
}: TypingCommandProps) {
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const hasRun = useRef(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!active || hasRun.current) return;

    hasRun.current = true;

    let index = 0;

    setTyped("");
    setIsTyping(true);
    setShowCursor(true);

    const interval = window.setInterval(() => {
      index += 1;
      setTyped(command.slice(0, index));

      if (index >= command.length) {
        window.clearInterval(interval);
        setIsTyping(false);

        window.setTimeout(() => {
          setShowCursor(false);
          onDoneRef.current?.();
        }, cursorHideDelay);
      }
    }, speed);

    return () => {
      window.clearInterval(interval);
    };
  }, [active, command, speed, cursorHideDelay]);

  return (
    <span className={`inline-flex min-w-0 max-w-full items-center ${className}`}>
      <span className="min-w-0 break-all">{typed}</span>

      {showCursor && (
        <motion.span
          animate={isTyping ? { opacity: 1 } : { opacity: [1, 0, 1] }}
          transition={
            isTyping
              ? { duration: 0 }
              : { duration: 0.53, repeat: Infinity, ease: "linear" }
          }
          className="ml-0.5 inline-block h-4 w-2 bg-muted-foreground align-middle dark:bg-neutral-300"
        />
      )}
    </span>
  );
}
