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
};

module.exports = nextConfig;
