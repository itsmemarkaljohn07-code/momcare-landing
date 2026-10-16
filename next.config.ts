import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain static files in out/ so the site can be hosted anywhere.
  output: "export",
  // Emit /privacy/index.html instead of /privacy.html so any static host serves it.
  trailingSlash: true,
  // Screenshots are already optimised WebP; there is no image server in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
