import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/tools/sip-calculator', destination: '/tools', permanent: true },
      { source: '/tools/stock-return',   destination: '/tools', permanent: true },
    ];
  },
};

export default nextConfig;