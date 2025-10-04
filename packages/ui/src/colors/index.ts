// 색상 토큰 정의 (SNU Design Week 2025)
export const colors = {
  // 메인 컬러 토큰
  primaryGreen: "#009E92",
  secondaryGray: "#E5E5E5",
  blackDefault: "#1E1E1E",
  blackWorksDetail: "#000000",
} as const;

// 색상 타입 정의
export type ColorKey = keyof typeof colors;
