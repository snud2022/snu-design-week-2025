/**
 * 텍스트를 줄바꿈 문자(`\n`)로 분리하고 빈 줄을 제거한 배열을 반환합니다.
 * @param text - 줄바꿈을 처리할 텍스트
 * @returns 빈 줄이 제거된 텍스트 라인 배열
 */
export function splitLines(text: string): string[] {
  return text.split("\n").filter((line) => line.trim());
}
