import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dev image optimizer wedges on many concurrent large resizes;
    // serve originals in dev, optimize in production only.
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
