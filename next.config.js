/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  basePath: '/learn-xai',
  assetPrefix: '/learn-xai/',
};

module.exports = nextConfig;
