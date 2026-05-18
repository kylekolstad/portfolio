import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface CodeFileLine {
  id: string;
  content: ReactNode;
}

interface CodeFileProps {
  lines: CodeFileLine[];
  className?: string;
}

export function CodeFile({ lines, className }: CodeFileProps) {
  return (
    <div
      className={cn(
        "w-full min-w-0 font-mono text-xs leading-relaxed",
        className,
      )}
    >
      {lines.map((line, index) => (
        <div
          key={line.id}
          className="grid min-w-0 grid-cols-[1rem_minmax(0,1fr)] gap-2"
        >
          <span className="select-none text-right tabular-nums text-muted-foreground/45">
            {index + 1}
          </span>

          <span className="min-w-0 whitespace-pre-wrap break-words">
            {line.content}
          </span>
        </div>
      ))}
    </div>
  );
}
