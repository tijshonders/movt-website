import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dev image optimizer wedges on many concurrent large resizes;
    // serve originals in dev, optimize in production only.
    unoptimized: process.env.NODE_ENV === "development",
    // Allow high-quality variants; Next.js clamps quality to this list
    // (default [75] silently downgraded our quality={90} hero images).
    qualities: [75, 90],
  },
};

export default nextConfig;
