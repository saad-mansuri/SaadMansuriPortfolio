import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/project",
        destination: "/projects",
      },
    ];
  },
};

export default nextConfig;
