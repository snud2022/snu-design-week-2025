import { worksClient, WORKS_DATABASE_ID } from "../instance";
import { getNotionDatabase } from "../common";
import type { NotionWork } from "../../types/notion";

/**
 * Notion에서 Works 데이터를 가져오는 함수
 */
export const getWorks = async (
  revalidateSeconds: number = 3600
): Promise<NotionWork[]> => {
  if (!WORKS_DATABASE_ID) {
    return [];
  }

  return getNotionDatabase<NotionWork>(
    worksClient,
    WORKS_DATABASE_ID,
    "notion-works",
    revalidateSeconds
  );
};
