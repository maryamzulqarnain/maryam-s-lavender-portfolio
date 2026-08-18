import { ArrowRight, Download, Sparkles, LineChart, Search, Palette } from "lucide-react";
import heroArt from "@/assets/hero-abstract.jpg";
import { profile } from "@/content/portfolio";

const focusAreas = ["Marketing", "Strategy", "Consumer Insight", "Research", "Technology"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full gradient-hero opacity-70 blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-primary shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {profile.availability}
          </span>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {profile.name}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Business, Marketing &amp; Strategy — <span className="text-gradient">with a creative edge.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.heroIntro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary sm:w-auto"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="relative" data-reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 shadow-lift">
            <img
              src={heroArt}
              width={1200}
              height={1200}
              alt="Abstract lavender composition of soft geometric shapes representing strategy, research and creativity"
              className="h-full w-full object-cover"
            />
          </div>

          <FloatingCard
            className="-left-3 top-8 sm:-left-8"
            icon={<LineChart className="h-4 w-4" aria-hidden="true" />}
            label="Strategy"
            value="BCG Matrix"
          />
          <FloatingCard
            className="-right-2 top-1/2 sm:-right-6"
            icon={<Search className="h-4 w-4" aria-hidden="true" />}
            label="Research"
            value="Consumer Insight"
            delay="1.4s"
          />
          <FloatingCard
            className="bottom-6 left-6"
            icon={<Palette className="h-4 w-4" aria-hidden="true" />}
            label="Design"
            value="Figma · Moqups"
            delay="2.6s"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-4 right-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-primary shadow-soft animate-float"
          >
            <Sparkles className="h-5 w-5" />
          </span>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  icon,
  label,
  value,
  className,
  delay = "0s",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`absolute hidden items-center gap-3 rounded-2xl border border-border/70 bg-card/95 px-4 py-3 shadow-soft backdrop-blur animate-float sm:flex ${className ?? ""}`}
    >
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm font-medium text-foreground">{value}</span>
      </span>
    </div>
  );
}