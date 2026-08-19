import type { Project } from "@/content/portfolio";

/**
 * Abstract, clearly-illustrative placeholder art per project type.
 * To use a real screenshot instead, set `image` on the project in
 * src/content/portfolio.ts (import the file from src/assets).
 */
export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="h-full w-full bg-white/70">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          className={project.imageFit === "contain" ? "h-full w-full object-contain p-6" : "h-full w-full object-cover"}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Abstract lavender placeholder illustration for ${project.name}`}
      className="relative h-full w-full gradient-hero"
    >
      <div className="absolute inset-0 grid place-items-center p-6">{art[project.visual]}</div>
    </div>
  );
}

const stroke = "oklch(0.45 0.09 303 / 0.55)";
const fill = "oklch(1 0 0 / 0.7)";

const art: Record<Project["visual"], React.ReactNode> = {
  strategy: (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <circle cx="45" cy="60" r="24" fill={fill} stroke={stroke} />
      <circle cx="100" cy="35" r="16" fill="none" stroke={stroke} />
      <circle cx="150" cy="70" r="20" fill={fill} stroke={stroke} />
      <path d="M45 60 L100 35 L150 70" fill="none" stroke={stroke} strokeDasharray="4 4" />
    </svg>
  ),
  matrix: (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="30" y="15" width="140" height="90" fill={fill} stroke={stroke} />
      <line x1="100" y1="15" x2="100" y2="105" stroke={stroke} />
      <line x1="30" y1="60" x2="170" y2="60" stroke={stroke} />
      <circle cx="65" cy="38" r="9" fill={stroke} opacity="0.5" />
      <circle cx="135" cy="82" r="13" fill={stroke} opacity="0.3" />
      <circle cx="132" cy="35" r="6" fill={stroke} opacity="0.4" />
    </svg>
  ),
  slides: (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="25" y="20" width="110" height="70" rx="6" fill={fill} stroke={stroke} />
      <rect x="55" y="35" width="110" height="70" rx="6" fill={fill} stroke={stroke} />
      <line x1="70" y1="55" x2="145" y2="55" stroke={stroke} />
      <line x1="70" y1="68" x2="125" y2="68" stroke={stroke} />
      <line x1="70" y1="81" x2="135" y2="81" stroke={stroke} />
    </svg>
  ),
  wireframe: (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="45" y="10" width="50" height="100" rx="8" fill={fill} stroke={stroke} />
      <rect x="53" y="22" width="34" height="20" rx="3" stroke={stroke} fill="none" />
      <line x1="53" y1="52" x2="87" y2="52" stroke={stroke} />
      <line x1="53" y1="62" x2="78" y2="62" stroke={stroke} />
      <rect x="110" y="25" width="50" height="70" rx="8" stroke={stroke} fill="none" />
      <circle cx="135" cy="60" r="12" stroke={stroke} fill="none" />
    </svg>
  ),
  website: (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="25" y="18" width="150" height="86" rx="8" fill={fill} stroke={stroke} />
      <line x1="25" y1="36" x2="175" y2="36" stroke={stroke} />
      <circle cx="37" cy="27" r="3" fill={stroke} />
      <rect x="38" y="50" width="60" height="38" rx="4" stroke={stroke} fill="none" />
      <line x1="110" y1="55" x2="162" y2="55" stroke={stroke} />
      <line x1="110" y1="68" x2="150" y2="68" stroke={stroke} />
      <line x1="110" y1="81" x2="158" y2="81" stroke={stroke} />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden="true">
      <rect x="35" y="15" width="95" height="90" rx="6" fill={fill} stroke={stroke} />
      <line x1="50" y1="35" x2="115" y2="35" stroke={stroke} />
      <line x1="50" y1="48" x2="100" y2="48" stroke={stroke} />
      <line x1="50" y1="61" x2="112" y2="61" stroke={stroke} />
      <circle cx="140" cy="75" r="22" fill="none" stroke={stroke} />
      <line x1="156" y1="91" x2="172" y2="105" stroke={stroke} />
    </svg>
  ),
};
