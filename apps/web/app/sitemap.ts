import { MetadataRoute } from "next";
import { getWorks } from "@services/works";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://2025.snudesignweek.com";

  // 정적 라우트
  const staticRoutes = [
    "",
    "/about",
    "/works",
    "/people",
    "/program",
    "/partners",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 동적 작품 페이지들
  try {
    const works = await getWorks();
    const workPages: MetadataRoute.Sitemap = works.map((work) => ({
      url: `${siteUrl}/works/${work.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [...staticPages, ...workPages];
  } catch {
    // 작품 데이터를 가져오지 못해도 정적 페이지는 반환
    return staticPages;
  }
}
