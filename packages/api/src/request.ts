import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import type { ExtendedRecordMap } from "notion-types";
import { parseError } from "./error";

/**
 * Notion 데이터베이스 쿼리 함수
 * Notion Client를 사용하여 데이터베이스 쿼리 및 에러 처리
 */
export async function queryNotionDatabase<T>(
  client: Client,
  databaseId: string,
  sorts?: Array<{
    property: string;
    direction: "ascending" | "descending";
  }>
): Promise<T[]> {
  try {
    const response = await client.databases.query({
      database_id: databaseId,
      ...(sorts && sorts.length > 0 ? { sorts } : {}),
    });

    // Notion API 응답의 results 배열을 반환
    return response.results as unknown as T[];
  } catch (err) {
    parseError(err);
  }
}

/**
 * Notion 페이지의 recordMap을 가져오는 함수
 * notion-client를 사용하여 페이지 데이터를 가져오고 에러 처리
 */
export async function queryNotionPage(
  pageId: string
): Promise<ExtendedRecordMap> {
  try {
    const notion = new NotionAPI();
    const recordMap = await notion.getPage(pageId);
    return recordMap;
  } catch (err) {
    parseError(err);
  }
}
