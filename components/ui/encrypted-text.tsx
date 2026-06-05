"use client";

import { animate } from "motion";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  startDelayMs?: number;
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

function getDeterministicEncryptedCharacter(
  originalChar: string,
  index: number,
  charset: string
): string {
  if (originalChar === " ") return " ";

  const seed = index * 37 + originalChar.charCodeAt(0) * 17;
  let deterministicIndex = Math.abs(seed) % charset.length;
  let encryptedChar = charset.charAt(deterministicIndex);

  // Ensure the initial encrypted glyph never matches the real character.
  if (encryptedChar === originalChar) {
    deterministicIndex = (deterministicIndex + 1) % charset.length;
    encryptedChar = charset.charAt(deterministicIndex);
  }

  return encryptedChar;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  startDelayMs = 420,
  revealDelayMs = 36,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 42,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.01,
    margin: "0px",
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [revealCount, setRevealCount] = useState(0);
  const revealCountRef = useRef(0);

  // Important: deterministic initial value.
  // Do NOT generate random chars here during render.
  const scrambleCharsRef = useRef<string[]>(text.split(""));

  useEffect(() => {
    scrambleCharsRef.current = text.split("");
    setRevealCount(0);
    revealCountRef.current = 0;
    setHasStarted(false);
  }, [text]);

  useEffect(() => {
    if (!isInView) return;

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

    const runAnimation = async () => {
      await waitWithMotion(Math.max(0, startDelayMs));
      if (isCancelled) return;

      const totalLength = text.length;
      const initial = generateGibberishPreservingSpaces(text, charset);
      scrambleCharsRef.current = initial.split("");

      setHasStarted(true);
      setRevealCount(0);
      revealCountRef.current = 0;

      const revealControl = animate(0, totalLength, {
        duration: (Math.max(1, revealDelayMs) * Math.max(1, totalLength)) / 1000,
        ease: "linear",
        onUpdate: (latest) => {
          if (isCancelled) return;
          const nextReveal = Math.min(totalLength, Math.floor(latest));
          revealCountRef.current = nextReveal;
          setRevealCount(nextReveal);
        },
      });

      controls.push(revealControl);

      const scrambleLoop = async () => {
        while (!isCancelled && revealCountRef.current < totalLength) {
          for (let index = revealCountRef.current; index < totalLength; index += 1) {
            scrambleCharsRef.current[index] =
              text[index] === " " ? " " : generateRandomCharacter(charset);
          }

          await waitWithMotion(Math.max(0, flipDelayMs));
        }
      };

      scrambleLoop();
      await revealControl.finished;

      if (!isCancelled) {
        revealCountRef.current = totalLength;
        setRevealCount(totalLength);
      }
    };

    runAnimation();

    return () => {
      isCancelled = true;
      controls.forEach((control) => control.stop());
    };
  }, [isInView, text, startDelayMs, revealDelayMs, charset, flipDelayMs]);

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
            ? getDeterministicEncryptedCharacter(char, index, charset)
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
