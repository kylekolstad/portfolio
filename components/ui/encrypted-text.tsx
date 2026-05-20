"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  encryptedClassName?: string;
  revealedClassName?: string;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

function generateGibberishPreservingSpaces(
  original: string,
  charset: string
): string {
  if (!original) return "";

  let result = "";

  for (let i = 0; i < original.length; i += 1) {
    const ch = original[i];
    result += ch === " " ? " " : generateRandomCharacter(charset);
  }

  return result;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const [hasStarted, setHasStarted] = useState(false);
  const [revealCount, setRevealCount] = useState(0);

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);

  // Important: deterministic initial value.
  // Do NOT generate random chars here during render.
  const scrambleCharsRef = useRef<string[]>(text.split(""));

  useEffect(() => {
    scrambleCharsRef.current = text.split("");
    setRevealCount(0);
    setHasStarted(false);
  }, [text]);

  useEffect(() => {
    if (!isInView) return;

    const initial = generateGibberishPreservingSpaces(text, charset);
    scrambleCharsRef.current = initial.split("");

    setHasStarted(true);
    setRevealCount(0);

    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;

    let isCancelled = false;

    const update = (now: number) => {
      if (isCancelled) return;

      const elapsedMs = now - startTimeRef.current;
      const totalLength = text.length;

      const currentRevealCount = Math.min(
        totalLength,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs))
      );

      setRevealCount(currentRevealCount);

      if (currentRevealCount >= totalLength) return;

      const timeSinceLastFlip = now - lastFlipTimeRef.current;

      if (timeSinceLastFlip >= Math.max(0, flipDelayMs)) {
        for (let index = 0; index < totalLength; index += 1) {
          if (index >= currentRevealCount) {
            scrambleCharsRef.current[index] =
              text[index] === " " ? " " : generateRandomCharacter(charset);
          }
        }

        lastFlipTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(update);
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      isCancelled = true;

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

  if (!text) return null;

  return (
    <motion.span
      ref={ref}
      className={cn(
        "relative inline-block align-baseline overflow-visible",
        className
      )}
      aria-label={text}
      role="text"
    >
      <span aria-hidden="true" className={cn("invisible", revealedClassName)}>
        {text}
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-visible whitespace-pre"
      >
        {text.split("").map((char, index) => {
          const isRevealed = hasStarted && index < revealCount;

          const displayChar = !hasStarted
            ? char
            : isRevealed
              ? char
              : char === " "
                ? " "
                : scrambleCharsRef.current[index] ?? char;

          return (
            <span
              key={index}
              className={cn(
                isRevealed ? revealedClassName : encryptedClassName
              )}
            >
              {displayChar}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
};
