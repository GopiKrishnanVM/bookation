/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    minimumCacheTTL: 60,
    domains: [
      "images.unsplash.com",
      "tailwindui.com",
      "firebasestorage.googleapis.com",
    ],
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
