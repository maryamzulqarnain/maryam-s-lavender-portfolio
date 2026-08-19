import { experiences } from "@/content/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      tone="soft"
      eyebrow="Experience"
      title="Where I've been learning."
      subtitle="Internships, simulations and societies that shaped how I think about business and technology."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
        {experiences.map((item) => (
          <li key={`${item.role}-${item.org}`} className="relative" data-reveal>
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-7 h-3 w-3 rounded-full border-2 border-background bg-primary sm:-left-[2.85rem]"
            />
            <article className="card-hover rounded-2xl border border-border/70 bg-card p-6 shadow-soft">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-foreground sm:text-xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-primary">{item.org}</p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {item.date}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-dusty-rose/40 hover:text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
