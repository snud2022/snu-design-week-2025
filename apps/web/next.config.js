import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import dotenv from "dotenv";

// ES module에서 __dirname 사용
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 프로젝트 루트의 .env.local 파일 로드
const rootEnvPath = resolve(__dirname, "../../.env.local");
dotenv.config({ path: rootEnvPath });

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  transpilePackages: ["@snud2025/ui"],
  experimental: {
    externalDir: true,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
