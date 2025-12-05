import { cache } from "react";
import { unstable_cache } from "next/cache";
import { queryNotionPage } from "@snud2025/api";
import type { ExtendedRecordMap } from "notion-types";
import { handleError } from "../handleError";

/**
 * Notion 페이지의 recordMap을 가져오는 함수
 */
export const getNotionRecordMap = cache(
  async (
    pageId: string,
    cacheKey?: string,
    revalidateSeconds: number = 3600
  ): Promise<ExtendedRecordMap | null> => {
    return unstable_cache(
      async () => {
        try {
          return await queryNotionPage(pageId);
        } catch (error) {
          handleError(error);
          return null;
        }
      },
      [cacheKey || `notion-recordmap-${pageId}`],
      {
        revalidate: revalidateSeconds,
        tags: ["notion-recordmap", `notion-recordmap-${pageId}`],
      }
    )();
  }
);
