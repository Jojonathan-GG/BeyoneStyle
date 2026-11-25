import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  // Allow the dev server to serve its client assets to the tablet on the LAN.
  allowedDevOrigins: ['192.168.100.76'],
};

export default nextConfig;
