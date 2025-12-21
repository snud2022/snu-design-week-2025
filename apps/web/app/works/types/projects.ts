import type { BaseCategory } from "@app-types/categories";

export type ProjectDetail = {
  id: string;
  projectType: BaseCategory;
  filterIndex: number; // peopleGraphicConfigs의 인덱스
  nameKo: string;
  nameEn: string;
  studentNameKo: string;
  studentNameEn: string;
  thumbnailUrl?: string;
  email: string;
  instagram: string;
  isIntegratedProject?: boolean; // 통합 프로젝트 여부
};
