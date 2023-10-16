export interface KakaoAccessRequest {
    client_id: string;
    redirect_uri: string;
    response_type?: string;
}

export interface KakaoAccessResponse {
    code? : string;
    error? : string;
    error_description? : string;
    state? : string;
}

export interface KakaoLoginRequest extends KakaoAccessRequest {
    grant_type: string;
    code: string;
}

export interface KakaoLoginResponse {
    token_type: string;
    access_token: string;
    expires_in : number;
    refresh_token: string;
    refresh_token_expires_in: number;
}