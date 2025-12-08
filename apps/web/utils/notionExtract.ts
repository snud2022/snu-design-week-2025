import { getImageUrl } from "@snud2025/ui";
import type { NotionWork } from "../services/works";

/**
 * Notion의 properties에서 텍스트 추출 헬퍼
 * title 또는 rich_text 타입의 property에서 plain_text를 추출합니다.
 */
export function extractText(
  property:
    | { title?: Array<{ plain_text: string }> }
    | { rich_text?: Array<{ plain_text: string }> }
    | undefined
): string {
  if (!property) return "";
  if ("title" in property && property.title) {
    return property.title.map((t) => t.plain_text).join("");
  }
  if ("rich_text" in property && property.rich_text) {
    return property.rich_text.map((t) => t.plain_text).join("");
  }
  return "";
}

/**
 * Notion의 cover에서 이미지 URL 추출
 * getImageUrl을 사용하여 이미지 URL을 변환합니다.
 */
export function extractCoverUrl(notionWork: NotionWork): string | undefined {
  try {
    if (!notionWork.cover) return undefined;

    if (notionWork.cover.type === "file" && notionWork.cover.file?.url) {
      return getImageUrl(notionWork.cover.file.url, notionWork.id);
    }

    if (
      notionWork.cover.type === "external" &&
      notionWork.cover.external?.url
    ) {
      return getImageUrl(notionWork.cover.external.url, notionWork.id);
    }

    return undefined;
  } catch (error) {
    console.error("Error extracting cover URL:", error);
    return undefined;
  }
}
