/**
 * Notion Image url을 웹 게시 링크로 변환
 *
 * ⚠️ 주의사항:
 * 이 방법은 Notion의 비공식 API를 사용하는 방식입니다.
 * 현재는 동작하지만, Notion이 이 방식을 변경하거나 차단할 수 있어
 * 장기적인 지속 가능성을 보장하기 어렵습니다.
 *
 * 현재 방법의 문제점:
 * 1. 하드코딩된 도메인 (hhhyejaaa.notion.site) - 워크스페이스 변경 시 수정 필요
 * 2. Notion의 공식 문서에 없는 비공식 API 사용
 * 3. Notion 정책 변경 시 동작하지 않을 수 있음
 *
 * 대안:
 * 1. 외부 이미지 컨테이너에 배포 (리뷰어 제안)
 *    - 이미지를 별도 CDN/스토리지에 저장하여 안정적인 URL 제공
 *    - Notion API로 이미지 다운로드 후 외부 저장소에 업로드
 *
 * 2. Notion API의 공식 이미지 URL 사용
 *    - @notionhq/client의 files API를 통해 공식 URL 가져오기
 *    - 단, 일부 이미지는 만료 시간이 있어 추가 처리 필요
 *
 * 3. react-notion-x의 기본 mapImageUrl 사용
 *    - 라이브러리의 기본 동작을 사용하되, 필요시 프록시 서버 구성
 *
 * TODO: 더 안정적인 방법으로 마이그레이션 고려
 * - 환경 변수로 도메인 관리
 * - 이미지 프록시 서버 구축
 * - 외부 이미지 컨테이너 사용
 */
export function getImageUrl(imageUrl: string, pageId: string): string {
  return `https://hhhyejaaa.notion.site/image/${encodeURIComponent(imageUrl)}?table=block&id=${pageId}&cache=v2`;
}
