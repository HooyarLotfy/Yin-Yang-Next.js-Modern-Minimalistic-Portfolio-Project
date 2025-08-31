/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static export deployment (uncomment for cPanel static hosting)
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },

  // For Node.js deployment
  compress: true,
  images: {
    domains: [], // Add any external domains you're loading images from
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Uncomment if deploying to a subdirectory
  // basePath: '/portfolio',

  // Performance optimizations
  swcMinify: true,
  reactStrictMode: true,

  // Uncomment if using experimental features
  // experimental: {
  //   serverActions: true,
  //   serverComponentsExternalPackages: [],
  // },
};

module.exports = nextConfig;
