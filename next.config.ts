import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "web1";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubActions ? `/${repoName}` : undefined,
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
};

export default nextConfig;
