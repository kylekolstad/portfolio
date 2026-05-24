"use client";

import { motion } from "motion/react";
import { LinkPreview } from "./link-preview";

type ExperienceProps = {
  date?: string;
  title?: string;
  subTitle?: string;
  org?: string;
  orgUrl?: string;
  bullets?: string[];
  tags?: string[];
};

export function Experience({
  date,
  title,
  subTitle,
  org,
  orgUrl,
  bullets,
  tags,
}: ExperienceProps) {
  return (
    <>
      <motion.div
        key={`${org}-${date}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.4,
        }}
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3 md:mb-4">
          <span className="text-[var(--accent-indigo)] font-bold text-sm shrink-0 md:w-32">
            [{date}]
          </span>

          <div className="flex-1">
            <span className="text-foreground font-bold text-base block sm:inline">
              {title}
            </span>
            <span className="text-[var(--accent-green)] sm:ml-2 text-sm sm:text-base">
              @{" "}
              <LinkPreview
                url={orgUrl}
                className="font-bold !text-[var(--accent-green)]"
              >
                {org}
              </LinkPreview>
            </span>
            {subTitle && (
              <>
                <br />
                <span className="text-muted-foreground block sm:inline mt-1">
                  {subTitle}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="ml-2 pl-4 border-l border-border md:border-none md:pl-0 md:ml-[144px]">
          <ul className="space-y-3 text-muted-foreground relative md:before:absolute md:before:inset-y-0 md:before:-left-4 md:before:w-px md:before:bg-border mb-4">
            {bullets?.map((bullet, bIndex) => (
              <li
                key={bIndex}
                className="relative before:absolute before:w-2 md:before:h-px before:h-0 md:before:bg-border before:-left-4 before:top-2.5 list-disc md:list-none ml-4 md:ml-0"
              >
                <span className="relative -left-2 md:left-0 block">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 bg-accent/50 border border-border/50 rounded text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
