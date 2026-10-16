import { buttonClass } from "@/lib/button";
import { siteConfig } from "@/site-config";

interface StaffLinkProps {
  /** Unique per page; links the disabled link to its tooltip. */
  id: string;
  appearance: "nav" | "button";
}

const navClass =
  "flex min-h-11 items-center rounded-[10px] px-3 text-[.9rem] font-semibold text-muted no-underline hover:text-accent-1";

/** Opens the web dashboard, or stays disabled with a tooltip until dashboardUrl is set. */
export function StaffLink({ id, appearance }: StaffLinkProps) {
  const className = appearance === "nav" ? navClass : buttonClass("ghost");

  if (siteConfig.dashboardUrl) {
    return (
      <a href={siteConfig.dashboardUrl} target="_blank" rel="noopener" className={className}>
        Staff sign-in
      </a>
    );
  }

  const tipId = `${id}-tip`;
  return (
    <span
      role="link"
      aria-disabled="true"
      tabIndex={0}
      aria-describedby={tipId}
      className={`group relative cursor-not-allowed opacity-75 ${className}`}
    >
      Staff sign-in
      <span
        id={tipId}
        role="tooltip"
        className="invisible absolute top-[calc(100%+8px)] left-3 z-20 w-max max-w-[220px] rounded-[10px] bg-ink px-3 py-2 text-center text-[.82rem] leading-snug font-bold text-bg opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 min-[900px]:left-1/2 min-[900px]:-translate-x-1/2"
      >
        The staff dashboard link is not available yet.
      </span>
    </span>
  );
}
