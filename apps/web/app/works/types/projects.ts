import type { BaseCategory } from "./categories";

export type StudentProject = {
  id: string;
  nameKo: string;
  nameEn: string;
  studentNameKo: string;
  studentNameEn: string;
  filterIndex: number; // peopleGraphicConfigs의 인덱스
  thumbnailUrl?: string;
};

export type ProjectDetail = {
  id: string;
  projectType: BaseCategory;
  nameKo: string;
  nameEn: string;
  studentNameKo: string;
  studentNameEn: string;
  email: string;
  instagram: string;
  descriptionKo: string;
  descriptionEn: string;
  isIntegratedProject?: boolean; // 통합 프로젝트 여부
};

