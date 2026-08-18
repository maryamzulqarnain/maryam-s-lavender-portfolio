import { about } from "@/content/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title={about.heading}>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5" data-reveal>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-base leading-[1.85] text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <ul className="grid grid-cols-2 gap-4" data-reveal>
          {about.highlights.map((h) => (
            <li
              key={h.label}
              className="rounded-2xl border border-border/70 bg-card p-5 shadow-soft"
            >
              <p className="font-display text-xl text-foreground sm:text-2xl">{h.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{h.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}