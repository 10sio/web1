import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/gifts/:slug",
        destination: "/gift?slug=:slug",
      },
    ];
  },
};

export default nextConfig;
