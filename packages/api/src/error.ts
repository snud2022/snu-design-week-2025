import { isNotionClientError, APIResponseError } from "@notionhq/client";
import { NetworkError, ClientError, ServerError } from "./types";

/**
 * 에러 처리 헬퍼 함수
 * API 에러를 프로젝트 에러 타입으로 변환
 */
export function parseError(err: unknown): never {
  // Notion API 에러인 경우
  if (isNotionClientError(err)) {
    // HTTP 상태 코드를 포함하는 APIResponseError인 경우 에러 파싱
    if (err instanceof APIResponseError) {
      const status = err.status;
      const message = err.message;

      // 클라이언트 에러
      if (status >= 400 && status < 500) {
        throw new ClientError(status, message);
      }

      // 서버 에러
      if (status >= 500) {
        throw new ServerError(status, message);
      }

      // 기타 HTTP 에러 (3xx 등)
      throw new ClientError(status, message);
    }

    // APIResponseError가 아닌 다른 NotionClientError (예: RequestTimeoutError)
    throw new NetworkError(err.message);
  }

  // 네트워크 에러 (연결 실패, DNS 오류 등)
  if (err instanceof Error) {
    throw new NetworkError(err.message);
  }

  // 알 수 없는 에러
  throw new NetworkError("Unknown error occurred");
}
