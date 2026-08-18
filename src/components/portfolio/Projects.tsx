import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content/portfolio";
import { Section } from "./Section";
import { ProjectVisual } from "./ProjectVisual";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected Work"
      subtitle="A collection of projects where I explored business, strategy, research, design, and technology."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground" data-reveal>
        Visuals are abstract placeholders — real project images can be added at any time.
      </p>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-reveal
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
        project.featured && "sm:col-span-2 sm:flex-row",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-border/60",
          project.featured && "sm:aspect-auto sm:w-[44%] sm:border-b-0 sm:border-r",
        )}
      >
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-4 font-display text-xl text-foreground sm:text-2xl">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-colors hover:opacity-80"
          >
            View {project.name}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}