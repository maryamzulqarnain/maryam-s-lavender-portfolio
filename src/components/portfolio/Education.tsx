import { GraduationCap } from "lucide-react";
import { education } from "@/content/portfolio";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <ol className="space-y-5">
        {education.map((item) => (
          <li
            key={item.degree}
            data-reveal
            className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft sm:p-7"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="flex min-w-0 items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-foreground sm:text-xl">{item.degree}</h3>
                  <p className="mt-1 text-sm text-primary">{item.school}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {item.date}
              </span>
            </div>
            {item.coursework.length > 0 && (
              <div className="mt-5 border-t border-border/70 pt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Relevant coursework
                </p>
                <p className="mt-2 text-sm text-secondary-foreground">
                  {item.coursework.join(" · ")}
                </p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}