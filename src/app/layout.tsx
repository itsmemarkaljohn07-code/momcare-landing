import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/site-config";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const title = "MomCare — Pregnancy companion app for Android";
const description =
  "MomCare is a pregnancy companion app for Android, connected to your clinic: weekly baby development, daily checklists, appointments, snapshots and a health tracker.";

// og:image needs an absolute URL, so it is only emitted once siteUrl is configured.
const siteUrl = siteConfig.siteUrl.trim();

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description: "A pregnancy companion app for Android, connected to your clinic. A capstone project.",
    ...(siteUrl && { images: [{ url: "/og-image.png", width: 1200, height: 630 }] }),
  },
  twitter: { card: siteUrl ? "summary_large_image" : "summary" },
};

export const viewport: Viewport = {
  themeColor: "#0c0a10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`antialiased ${nunito.variable}`}>
      <body>
        <a
          href="#main"
          className="absolute -top-16 left-4 z-[100] rounded-[10px] bg-ink px-4 py-2.5 font-bold text-bg focus:top-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
