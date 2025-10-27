export function formatNameEn(nameEn: string) {
  const parts = nameEn.split(" "); // 띄어쓰기 기준으로 나눔
  if (parts.length > 1) {
    return parts.join("\n"); // 띄어쓰기를 줄바꿈으로 변환
  }
  return nameEn; // 띄어쓰기 없는 경우 그대로
}
