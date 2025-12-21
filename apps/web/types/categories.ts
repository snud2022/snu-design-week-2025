import { CATEGORY_CONFIGS } from "../constants/categories";

// 카테고리 기본 타입
export type BaseCategory = (typeof CATEGORY_CONFIGS)[number]["id"];
export type Category = "ALL" | BaseCategory;

// 카테고리별 상수 정보 타입
export type CategoryInfo = {
  categoryNameKo: string;
  categoryNameEn: string;
  advisorKo?: string;
  advisorEn?: string;
  descriptionKo?: string;
  descriptionEn?: string;
};

// 카테고리별 그래픽 타입 (이미지 경로 기반)
export type CategoryGraphic = {
  type: "svg" | "image";
  src: string | null;
  width: number;
  height: number;
};
