import { peopleClient, PEOPLE_DATABASE_ID } from "../instance";
import { getNotionDatabase } from "../common";
import type { NotionPerson } from "../../types/notion";

/**
 * Notion에서 People 데이터를 가져오는 함수
 */
export const getPeople = async (
  revalidateSeconds: number = 3600
): Promise<NotionPerson[]> => {
  if (!PEOPLE_DATABASE_ID) {
    return [];
  }

  return await getNotionDatabase<NotionPerson>(
    peopleClient,
    PEOPLE_DATABASE_ID,
    "notion-people",
    revalidateSeconds
  );
};
