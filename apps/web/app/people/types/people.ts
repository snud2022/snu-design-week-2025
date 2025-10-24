export type Person = {
  id: string; // 라우팅에 쓸 고유 ID
  nameKo: string;
  nameEn: string;
};

// 개인 페이지 URL 헬퍼
export const personHref = (id: string) => `/people/${id}`;
