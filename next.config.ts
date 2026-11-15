import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server for the Docker image (see deploy/README.md).
  output: "standalone",
};

export default nextConfig;
