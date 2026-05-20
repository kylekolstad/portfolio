import { TypingCommand } from "../ui/typing-command";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-label="Kyle Kolstad developer logo"
      className={[
        "group inline-flex items-center whitespace-nowrap font-mono font-bold leading-none tracking-tight",
        "text-[#d8ccff] transition-colors duration-300",
        className,
      ].join(" ")}
    >
      <span className="transition-colors group-hover:text-[var(--accent-violet)]">Kyle</span>
      <span className="text-[#8f889e] transition-colors group-hover:text-[var(--accent-violet)]">_</span>
      <span className="transition-colors group-hover:text-[var(--accent-violet)]">Kolstad</span>
      <TypingCommand
        command=".dev"
        active
        speed={200}
        className="text-[#8f889e] transition-colors group-hover:text-[var(--accent-violet)]"
      />
    </span>
  );
}
