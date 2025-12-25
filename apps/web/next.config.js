import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import dotenv from "dotenv";
import bundleAnalyzer from "@next/bundle-analyzer";

// ES module에서 __dirname 사용
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 프로젝트 루트의 .env.local 파일 로드
const rootEnvPath = resolve(__dirname, "../../.env.local");
dotenv.config({ path: rootEnvPath });

// Bundle Analyzer 설정
const withBundleAnalyzer = bundleAnalyzer({
  // 어차피 빌드 당시에 ANANYZE 변수를 넣는 구조라 괜찮습니다.
  // package.json 에서 analyze 스크립트를 실행하면 ANALYZE=true 로 설정합니다.
  // eslint-disable-next-line turbo/no-undeclared-env-vars, no-undef
  enabled: process.env.ANALYZE === "true",
});

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
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
