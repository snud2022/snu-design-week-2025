import type { NotionWork, NotionWorkWithBlocks } from "../../../services/works";
import type { ProjectDetail } from "../types/projects";
import {
  getCategoryByIndex,
  getIndexFromClassName,
} from "../../../utils/categories";
import { extractText, extractCoverUrl } from "../../../utils/notionExtract";

/**
 * 수업 이름을 filterIndex로 변환하는 헬퍼
 * Notion의 수업 이름을 카테고리 인덱스로 매핑
 */
function getFilterIndexFromClass(
  classProperty: NotionWork["properties"]["수업"]
): number {
  if (!classProperty || classProperty.type !== "multi_select") {
    return 0;
  }

  const classNames = classProperty.multi_select.map((item) => item.name);

  // 첫 번째 수업 이름으로 매핑 시도
  if (classNames.length > 0 && classNames[0]) {
    return getIndexFromClassName(classNames[0]);
  }

  return 0; // 기본값
}

/**
 * NotionWork를 ProjectDetail로 변환
 */
export function transformWork(notionWork: NotionWork): ProjectDetail {
  try {
    const properties = notionWork.properties;

    // 기본 정보 추출
    const nameKo = extractText(properties.작품이름) || "제목 없음";
    const nameEn = extractText(properties.작품이름_영문) || "Untitled";
    const studentNameKo = extractText(properties.학생이름) || "";
    const studentNameEn = extractText(properties.학생이름_영문) || "";
    const email = properties.Email?.email || "";
    const instagram = extractText(properties["인스타 아이디"]) || "";

    // filterIndex: 수업 정보에서 추출
    let filterIndex = 0;
    if (
      typeof properties.filterIndex === "object" &&
      "number" in properties.filterIndex &&
      properties.filterIndex.number !== null
    ) {
      filterIndex = properties.filterIndex.number;
    } else if (properties.수업) {
      filterIndex = getFilterIndexFromClass(properties.수업);
    }

    const projectType = getCategoryByIndex(filterIndex) || "BRAND";

    // thumbnailUrl: cover에서 추출
    const thumbnailUrl = extractCoverUrl(notionWork);

    // 통합 프로젝트 여부는 다른 작품 relation이 있는지로 판단
    const isIntegratedProject =
      properties.다른작품?.relation && properties.다른작품.relation.length > 0
        ? false
        : undefined;

    return {
      id: notionWork.id,
      projectType,
      filterIndex,
      nameKo,
      nameEn,
      studentNameKo,
      studentNameEn,
      thumbnailUrl,
      email,
      instagram,
      isIntegratedProject,
    };
  } catch {
    // 기본값 반환
    return {
      id: notionWork.id,
      projectType: "BRAND",
      filterIndex: 0,
      nameKo: "제목 없음",
      nameEn: "Untitled",
      studentNameKo: "",
      studentNameEn: "",
      thumbnailUrl: undefined,
      email: "",
      instagram: "",
      isIntegratedProject: undefined,
    };
  }
}

/**
 * NotionWork 배열을 ProjectDetail 배열로 변환
 */
export function transformWorks(notionWorks: NotionWork[]): ProjectDetail[] {
  return notionWorks.map(transformWork);
}

/**
 * NotionWorkWithBlocks를 ProjectDetail로 변환
 * transformWork와 동일한 로직이지만 타입 호환성을 위해 유지
 */
export function transformProjectDetail(
  notionWork: NotionWorkWithBlocks
): ProjectDetail {
  return transformWork(notionWork);
}
