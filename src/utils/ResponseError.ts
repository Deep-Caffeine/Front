export interface ApiErrorResponse {
  code: number;
  message: string;
  result?: boolean;
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
