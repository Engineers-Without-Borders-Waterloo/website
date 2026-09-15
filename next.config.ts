import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Keep this if you were using it to fix Turbopack root detection
  // turbopack: {
  //   root: process.cwd(),
  // },

  images: {
    unoptimized: true,
  }
};

export default nextConfig;
