import { Mail, Linkedin } from "lucide-react";
import { profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-lavender-soft px-5 py-10 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-lg text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Business · Marketing · Strategy · Technology
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}