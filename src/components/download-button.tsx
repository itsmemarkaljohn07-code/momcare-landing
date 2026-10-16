import { buttonClass } from "@/lib/button";
import { downloadAvailable, siteConfig } from "@/site-config";

type Size = "md" | "sm";

/** Real download link once the APK is published, otherwise a disabled "Coming soon". */
export function DownloadButton({ size = "md" }: { size?: Size }) {
  if (downloadAvailable) {
    return (
      <a href={siteConfig.apkUrl} download className={buttonClass("primary", size)}>
        Download for Android
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled
      aria-label="Download for Android, coming soon"
      className={buttonClass("disabled", size)}
    >
      Coming soon
    </button>
  );
}

/** Version, size and checksum, each shown only when filled in site-config.ts. */
export function DownloadNote() {
  if (!downloadAvailable) {
    return (
      <p className="mt-3.5 text-[.9rem] text-muted">
        The Android download is not ready yet. It will be posted on this page.
      </p>
    );
  }

  const meta = [
    siteConfig.version && `Version ${siteConfig.version}`,
    siteConfig.apkSizeMb && `${siteConfig.apkSizeMb} MB`,
  ].filter(Boolean);

  if (meta.length === 0 && !siteConfig.sha256) return null;

  return (
    <p className="mt-3.5 text-[.9rem] text-muted">
      {meta.join(" · ")}
      {siteConfig.sha256 && (
        <span className="mt-1 block break-all text-[.85rem]">
          SHA-256: <code className="text-[.8rem]">{siteConfig.sha256}</code>
        </span>
      )}
    </p>
  );
}
