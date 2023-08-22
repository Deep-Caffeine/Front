export interface NaverAccessRequest {
    response_type?: string;
    client_id: string;
    redirect_uri: string;
    state: string;
}
  
export interface NaverTokenRequest {
    grant_type: string;
    client_id: string;
    client_secret: string;
    code: string;
    state: string;
}
  
export interface NaverTokenResponse {
    access_token: string;
    refresh_token?: string;
    token_type: string;
    expires_in: number;
}

