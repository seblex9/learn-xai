/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // Add this line
  output: 'export',
};

module.exports = nextConfig;
