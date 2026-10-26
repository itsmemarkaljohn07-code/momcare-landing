/*
 * MomCare landing page settings. This is the only file you need to edit.
 * Values are read at build time, so run `npm run build` again after a change.
 *
 * To turn on the Download button, set BOTH:
 *   apkUrl: "https://…/momcare.apk"
 *   status: "available"
 * While either is missing the button stays disabled and reads "Coming soon".
 *
 * version, apkSizeMb and sha256 are shown under the button only when filled in.
 * dashboardUrl powers the "Staff sign-in" links; empty = disabled with a tooltip.
 * siteUrl is the public address of this site (e.g. "https://momcare.example");
 * link previews (og:image) are only emitted once it is set.
 */
export type SiteStatus = "coming-soon" | "available";

export interface SiteConfig {
  apkUrl: string;
  version: string;
  apkSizeMb: number | null;
  sha256: string;
  dashboardUrl: string;
  siteUrl: string;
  status: SiteStatus;
}

export const siteConfig: SiteConfig = {
  apkUrl: "/downloads/momcare-1.3.0.apk",
  version: "1.3.0",
  apkSizeMb: 16.7,
  sha256: "b10a0d7097dcca4060974de42832afadbdb0f173825fd74df67e227b05e5ed7d",
  dashboardUrl: "https://momcare-admin-dusky.vercel.app/login",
  siteUrl: "",
  status: "available",
};

export const downloadAvailable =
  siteConfig.apkUrl.trim() !== "" && siteConfig.status === "available";
