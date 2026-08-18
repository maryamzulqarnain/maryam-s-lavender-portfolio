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
        "scroll-mt-24 px-5 py-20 sm:px-8 md:py-28",
        tone === "soft" && "bg-lavender-soft",
        className,
      )}
    >
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