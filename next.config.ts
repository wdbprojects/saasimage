import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
  },
};

export default nextConfig;
