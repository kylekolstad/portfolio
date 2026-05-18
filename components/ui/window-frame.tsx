import type { Ref, ReactNode } from "react";
import { cn } from "@/lib/utils";

type WindowFrameVariant = "file" | "terminal" | "browser";

interface WindowFrameProps {
  children: ReactNode;
  variant?: WindowFrameVariant;
  title?: ReactNode;
  address?: ReactNode;
  status?: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  contentRef?: Ref<HTMLDivElement>;
}

export function WindowFrame({
  children,
  variant = "terminal",
  title,
  address,
  status,
  className,
  headerClassName,
  contentClassName,
  contentRef,
}: WindowFrameProps) {
  const isBrowser = variant === "browser";
  const centerTitle = variant === "terminal" || variant === "file";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-xl",
        variant === "terminal" && "font-mono text-sm shadow-sm",
        className,
      )}
    >
      <div
        className={cn(
          "flex min-h-[45px] items-center border-b border-border bg-muted/50 px-4 py-3",
          isBrowser ? "gap-3" : "gap-2",
          headerClassName,
        )}
      >
        <div className="flex shrink-0 gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80 transition-colors hover:bg-red-600" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80 transition-colors hover:bg-yellow-600" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80 transition-colors hover:bg-emerald-600" />
        </div>

        {isBrowser && address ? (
          <div className="min-w-0 flex-1">{address}</div>
        ) : (
          <div className={cn("min-w-0", centerTitle && "flex-1")}>
            <span
              className={cn(
                "block truncate text-xs text-muted-foreground",
                centerTitle && "text-center",
              )}
            >
              {title}
            </span>
          </div>
        )}

        {status ? (
          <div className="ml-auto flex shrink-0 items-center gap-1.5">
            {status}
          </div>
        ) : centerTitle ? (
          <div className="w-[52px] shrink-0" />
        ) : null}
      </div>

      <div ref={contentRef} className={contentClassName}>
        {children}
      </div>
    </div>
  );
}
