import { Download } from "lucide-react";
import { profile } from "@/content/portfolio";

export function DownloadCvLink({
  className,
  label = "Download CV",
  iconOnly = false,
  onDone,
}: {
  className: string;
  label?: string;
  iconOnly?: boolean;
  onDone?: () => void;
}) {
  return (
    <a
      href={profile.cvUrl}
      download="Maryam_Zulqarnain_CV.pdf"
      onClick={onDone}
      className={className}
    >
      {iconOnly ? <Download className="h-4 w-4" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
