/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  transpilePackages: ["@snud2025/ui"],
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
