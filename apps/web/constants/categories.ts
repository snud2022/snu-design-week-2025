import type { Category } from "../types/categories";

// 모든 정보를 담은 마스터 설정
export const CATEGORY_CONFIGS = [
  { id: "BRAND", index: 0, nameKo: "브랜드", nameEn: "Brand" },
  { id: "GRAPHIC", index: 1, nameKo: "그래픽", nameEn: "Graphic" },
  { id: "MEDIA", index: 2, nameKo: "미디어", nameEn: "Media" },
  { id: "UI/UX", index: 3, nameKo: "UI/UX", nameEn: "UI/UX" },
  { id: "LIVING", index: 4, nameKo: "리빙", nameEn: "Living" },
  {
    id: "PRODUCT INTERACTION",
    index: 5,
    nameKo: "제품 인터랙션",
    nameEn: "Product Interaction",
  },
  { id: "SPACE", index: 6, nameKo: "공간", nameEn: "Space" },
  { id: "MOBILITY", index: 7, nameKo: "모빌리티", nameEn: "Mobility" },
] as const;

// 카테고리 목록
export const CATEGORIES: Category[] = [
  "ALL",
  ...CATEGORY_CONFIGS.map((c) => c.id),
];
