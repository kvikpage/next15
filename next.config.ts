import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    SERVER_WEBSITE_NAME: "Server",
    NEXT_PUBLIC_WEBSITE_NAME: "Toc", //process.env.NEXT_PUBLIC_WEBSITE_NAME,
  },
};

export default nextConfig;
