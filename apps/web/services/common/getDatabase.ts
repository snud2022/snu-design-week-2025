import { cache } from "react";
import { unstable_cache } from "next/cache";
import { Client } from "@notionhq/client";
import { queryNotionDatabase } from "@snud2025/api";
import { handleError } from "../handleError";

/**
 * Notion 데이터베이스를 가져오는 함수
 */
export const getNotionDatabase = cache(
  async <T>(
    client: Client,
    databaseId: string,
    cacheKey?: string,
    revalidateSeconds: number = 3600
  ): Promise<T[] | []> => {
    if (!databaseId) {
      return [];
    }

    return unstable_cache(
      async () => {
        try {
          return await queryNotionDatabase<T>(client, databaseId);
        } catch (error) {
          handleError(error);
          return [];
        }
      },
      [
        cacheKey || `notion-database-${databaseId}`,
        // 개발 환경에서는 타임스탬프를 추가하여 캐시를 무효화
        ...(process.env.NODE_ENV === "development"
          ? [Date.now().toString()]
          : []),
      ],
      {
        // 개발 환경에서는 캐시를 비활성화하여 매번 실행되도록 함
        revalidate:
          process.env.NODE_ENV === "development" ? false : revalidateSeconds,
        tags: ["notion-database", `notion-database-${databaseId}`],
      }
    )();
  }
);
