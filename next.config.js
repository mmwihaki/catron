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
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { isServer }) => {
    // Ignore scripts directory during build
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/scripts/**', '**/product-images/**']
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
