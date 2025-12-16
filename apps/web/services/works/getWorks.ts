import { worksClient, WORKS_DATABASE_ID } from "../instance";
import { getNotionDatabase } from "../common";
import type { NotionWork } from "./types";

/**
 * Notion에서 Works 데이터를 가져오는 함수
 * 학생이름 기준 가나다 순으로 정렬됩니다.
 */
export const getWorks = async (
  revalidateSeconds: number = 1800
): Promise<NotionWork[]> => {
  if (!WORKS_DATABASE_ID) {
    return [];
  }

  return getNotionDatabase<NotionWork>(
    worksClient,
    WORKS_DATABASE_ID,
    "notion-works",
    revalidateSeconds,
    [
      {
        property: "학생이름",
        direction: "ascending",
      },
    ]
  );
};
