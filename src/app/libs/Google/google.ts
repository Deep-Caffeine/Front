export interface GoogleAccessRequest {
    client_id: string;
    redirect_uri: string;
    response_type?: string;
    scope: string;
}
  
export interface GoogleAccessResponse {
    code?: string;
    error?: string;
}
  
export interface GoogleLoginRequest extends GoogleAccessRequest {
    grant_type: string;
    code: string;
}
  
export interface GoogleLoginResponse {
    access_token: string; 
    expiry_date : number; 
    refresh_token? : string; 
    id_token? : string;
}