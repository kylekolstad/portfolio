"use client";

import { animate } from "motion";
import { motion, useInView } from "motion/react";
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
  const rootRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(rootRef, { once: false, amount: 0.2 });

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (!active || hasRun.current) return;

    hasRun.current = true;

    setTyped("");
    setIsTyping(true);
    setShowCursor(true);

    let isCancelled = false;
    const controls: Array<{ stop: () => void; finished: Promise<void> }> = [];

    const waitWithMotion = (ms: number) =>
      new Promise<void>((resolve) => {
        if (ms <= 0) {
          resolve();
          return;
        }

        const control = animate(0, 1, {
          duration: ms / 1000,
          ease: "linear",
        });

        controls.push(control);
        control.finished.then(() => resolve());
      });

    const runTyping = async () => {
      for (let index = 1; index <= command.length; index += 1) {
        await waitWithMotion(speed);
        if (isCancelled) return;
        setTyped(command.slice(0, index));
      }

      if (isCancelled) return;

      setIsTyping(false);
      await waitWithMotion(cursorHideDelay);

      if (isCancelled) return;

      setShowCursor(false);
      onDoneRef.current?.();
    };

    runTyping();

    return () => {
      isCancelled = true;
      controls.forEach((control) => control.stop());
    };
  }, [active, command, speed, cursorHideDelay]);

  return (
    <span ref={rootRef} className={`inline-flex min-w-0 max-w-full items-center ${className}`}>
      <span className="min-w-0 break-all">{typed}</span>

      {showCursor && (
        <motion.span
          className="ml-0.5 inline-block h-4 w-2 bg-muted-foreground align-middle dark:bg-neutral-300"
          animate={
            isTyping
              ? undefined
              : isInView
                ? { opacity: [1, 0, 1] }
                : { opacity: 1 }
          }
          transition={
            isTyping
              ? undefined
              : isInView
                ? { duration: 1.06, repeat: Infinity, ease: "linear", times: [0, 0.48, 0.49, 1] }
                : undefined
          }
        />
      )}
    </span>
  );
}
