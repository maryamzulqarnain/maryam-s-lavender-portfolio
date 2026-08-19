import { Download } from "lucide-react";
import { profile } from "@/content/portfolio";

async function downloadCv(url: string, filename: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch CV from ${url}`);
  }

  const blob = await response.blob();
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(blobUrl);
}

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
      onClick={async (event) => {
        event.preventDefault();
        await downloadCv(profile.cvUrl, "Maryam_Zulqarnain_CV.pdf");
        onDone?.();
      }}
      className={className}
    >
      {iconOnly ? <Download className="h-4 w-4" aria-hidden="true" /> : <Download className="h-4 w-4" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
}
