/**
 * Notion Image url을 웹 게시 링크로 변환
 */
const NOTION_SITE_DOMAIN = process.env.NEXT_PUBLIC_NOTION_SITE_DOMAIN;

export function getImageUrl(imageUrl: string, pageId: string): string {
  return `https://${NOTION_SITE_DOMAIN}/image/${encodeURIComponent(imageUrl)}?table=block&id=${pageId}&cache=v2`;
}
