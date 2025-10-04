import { colors } from "./index";

// 색상 유틸리티 함수들
export const getColor = (key: keyof typeof colors) => {
  return colors[key];
};

// 색상 투명도 조절
export const withOpacity = (color: string, opacity: number) => {
  // hex 색상을 rgba로 변환
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
};
