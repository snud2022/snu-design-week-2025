/**
 * 네트워크/전송 계층 에러
 */
export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

/**
 * 클라이언트 에러 (4xx)
 * 400 Bad Request, 401 Unauthorized, 404 Not Found 등
 */
export class ClientError extends Error {
  constructor(
    public code: number,
    message: string
  ) {
    super(message);
    this.name = "ClientError";
  }
}

/**
 * 서버 에러 (5xx)
 * 500 Internal Server Error 등
 */
export class ServerError extends Error {
  constructor(
    public code: number,
    message: string
  ) {
    super(message);
    this.name = "ServerError";
  }
}
