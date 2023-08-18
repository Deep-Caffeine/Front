export interface ApiErrorResponse {
  code: number;
  message: string;
  result?: boolean; // TODO: delete, 모든 api에서 result가 삭제되면 제거 (w. 민수님 0727), api 업데이트 확인하기 후 제거
}

class ResponseError {
  readonly code: ApiErrorResponse["code"];
  readonly message: ApiErrorResponse["message"];
  readonly defaultText: string;

  constructor(error: ApiErrorResponse) {
    const { code, message } = error;
    this.code = code;
    this.message = message;
    this.defaultText = `Error Code ${code}: ${message}`;
  }
}

export default ResponseError;

export function isApiErrorResponse(err: unknown): err is ApiErrorResponse {
  return typeof err === "object" && err !== null && "code" in err;
}
