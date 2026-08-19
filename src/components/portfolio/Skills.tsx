import { skillGroups } from "@/content/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      tone="soft"
      eyebrow="Skills"
      title="What I work with."
      subtitle="A mix of strategic frameworks, technical tools and the professional skills that tie them together."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            data-reveal
            className="card-hover rounded-3xl border border-border/70 bg-card p-6 shadow-soft sm:p-7"
          >
            <h3 className="font-display text-lg text-foreground">{group.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-dusty-rose/40 hover:text-primary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
