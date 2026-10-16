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
  apkUrl: "/downloads/momcare-1.0.0.apk",
  version: "1.0.0",
  apkSizeMb: 16.7,
  sha256: "0CE15BCE10742F3BEA515324193ED8FB2DE0EA78DB5025FD09EDA61172EFBE33",
  dashboardUrl: "https://momcare-admin-dusky.vercel.app",
  siteUrl: "",
  status: "available",
};

export const downloadAvailable =
  siteConfig.apkUrl.trim() !== "" && siteConfig.status === "available";