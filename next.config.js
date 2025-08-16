/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "images.pexels.com",
      "cdn.builder.io",
      "via.placeholder.com",
      "images.unsplash.com",
      "brator-main.smartdemowp.com",
    ],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || 'production',
  },
};

module.exports = nextConfig;
