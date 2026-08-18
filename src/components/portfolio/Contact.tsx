import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { contact, profile } from "@/content/portfolio";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
      <div
        data-reveal
        className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-border/70 gradient-hero px-6 py-16 text-center shadow-soft sm:px-12 md:py-20"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-secondary-foreground">
          {contact.copy}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Email
              </span>
              <span className="block truncate text-sm font-medium text-foreground">
                {profile.email}
              </span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Linkedin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                LinkedIn
              </span>
              <span className="block truncate text-sm font-medium text-foreground">
                {profile.linkedinLabel}
              </span>
            </span>
          </a>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
        >
          Get in Touch
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}