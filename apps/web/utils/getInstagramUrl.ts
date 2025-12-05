/**
 * 인스타그램 아이디를 받아서 인스타그램 프로필 URL을 반환하는 함수
 */
export const getInstagramUrl = (instagramId: string): string => {
  // @ 기호 제거 및 공백 제거
  const username = instagramId.replace(/^@/, "").trim();
  if (!username) {
    return "";
  }
  return `https://instagram.com/${username}`;
};
