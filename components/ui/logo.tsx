import { TypingCommand } from "./typing-command";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="Kyle Kolstad developer logo"
      className={[
        "group inline-flex items-center whitespace-nowrap font-mono font-bold leading-none tracking-tight",
        "text-[var(--accent-indigo)]",
        className,
      ].join(" ")}
    >
      <span className="inline-flex items-center">
        <span>Kyle</span>
        <span className="text-[#3f4154] dark:text-muted-foreground">
          _
        </span>
        <span>Kolstad</span>
      </span>
      <TypingCommand
        command=".dev"
        active
        speed={200}
        className="text-[#3f4154] dark:text-muted-foreground"
      />
    </span>
  );
}
