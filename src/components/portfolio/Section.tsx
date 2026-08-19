import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  tone = "default",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft";
}) {
  return (
    <section
      id={id}
      className={cn(
        "cosmic-surface scroll-mt-24 px-5 py-20 sm:px-8 md:py-28",
        tone === "soft" && "bg-lavender-soft",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[12%] h-1 w-1 rounded-full bg-dusty-rose/25 animate-twinkle" />
        <span className="absolute left-[22%] top-[26%] h-1.5 w-1.5 rounded-full bg-primary/20 animate-twinkle" style={{ animationDelay: "0.8s" }} />
        <span className="absolute right-[20%] top-[18%] h-1 w-1 rounded-full bg-lavender/30 animate-twinkle" style={{ animationDelay: "1.6s" }} />
        <span className="absolute right-[10%] top-[58%] h-1.5 w-1.5 rounded-full bg-dusty-rose/20 animate-twinkle" style={{ animationDelay: "2.4s" }} />
        <span className="absolute left-[14%] bottom-[16%] h-1 w-1 rounded-full bg-primary/20 animate-twinkle" style={{ animationDelay: "3.1s" }} />
      </div>
      <div className="mx-auto w-full max-w-6xl">
        {(eyebrow || title) && (
          <header className="max-w-2xl" data-reveal>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
            )}
          </header>
        )}
        <div className={cn(eyebrow || title ? "mt-12" : undefined)}>{children}</div>
      </div>
    </section>
  );
}
