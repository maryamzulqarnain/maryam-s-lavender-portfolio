import { Award, BadgeCheck } from "lucide-react";
import { awards, certifications } from "@/content/portfolio";
import { Section } from "./Section";

export function AwardsCertifications() {
  return (
    <Section
      id="awards"
      tone="soft"
      eyebrow="Recognition"
      title="Awards & Certifications"
      subtitle="Scholarships, competition results and courses I've completed along the way."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
        <div data-reveal>
          <h3 className="font-display text-xl text-foreground">Awards & Achievements</h3>
          <ul className="mt-5 space-y-4">
            {awards.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl gradient-accent text-primary-foreground">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.org}
                    {item.date && ` · ${item.date}`}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className="font-display text-xl text-foreground">Certifications</h3>
          <ul className="mt-5 space-y-4">
            {certifications.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}