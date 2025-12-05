import { NetworkError, ClientError, ServerError } from "@snud2025/api";

/**
 * 에러 처리 헬퍼 함수
 * 에러 타입별로 콘솔에 에러 로그를 출력합니다.
 */
export const handleError = (error: unknown) => {
  // 네트워크 에러
  if (error instanceof NetworkError) {
    console.error("🌐 Network Error:", error.message);
    return;
  }

  // 클라이언트 에러
  if (error instanceof ClientError) {
    console.error("📱 Client Error:", {
      code: error.code,
      message: error.message,
    });
    return;
  }

  // 서버 에러
  if (error instanceof ServerError) {
    console.error("🖥️ Server Error:", {
      code: error.code,
      message: error.message,
    });
    return;
  }

  // 알 수 없는 에러
  const errorMessage =
    error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다";
  console.error("❓ Unknown Error:", errorMessage, error);
};
