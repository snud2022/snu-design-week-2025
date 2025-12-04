/**
 * Notion Image url을 웹 게시 링크로 변환
 */
export function getImageUrl(imageUrl: string, pageId: string): string {
  return `https://hhhyejaaa.notion.site/image/${encodeURIComponent(imageUrl)}?table=block&id=${pageId}&cache=v2`;
}
