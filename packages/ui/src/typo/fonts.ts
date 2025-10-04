// 폰트 정의
export const fonts = {
  // 한글 폰트
  korean: {
    title: "var(--font-proxima-nova-hangeul)",
    body: "var(--font-pretendard)",
  },

  // 영문 폰트
  english: {
    title: "var(--font-bvh-anto-plot)",
    body: "var(--font-pretendard)",
  },

  // 기본 폰트 스택
  default: "var(--font-pretendard)",
} as const;

// 폰트 웨이트 정의
export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// 폰트 크기 정의 (px 단위)
export const fontSizes = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "32px",
  "4xl": "40px",
} as const;

// 라인 높이 정의
export const lineHeights = {
  tight: "120%",
  normal: "130%",
  relaxed: "140%",
  loose: "150%",
  extraLoose: "170%",
} as const;
