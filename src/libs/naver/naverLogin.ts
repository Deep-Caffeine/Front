import axios from 'axios';
import ResponseError, {isApiErrorResponse}  from "@/app/utils/ResponseError";
import { NaverAccessRequest,NaverTokenRequest,NaverTokenResponse } from './naver';

export const getNaverAuthUrl = (state: string): string => {
  const client_id = process.env.NAVER_CLIENT_ID;
  const redirectUri = 'http://localhost:3000/auth/naver/callback';

  const params: NaverAccessRequest = {
    response_type: 'code',
    client_id : 'client_id',
    redirect_uri: redirectUri,
    state: state,
  };

  const queryString = new URLSearchParams(params as Record<string, string>).toString();
  return `https://nid.naver.com/oauth2.0/authorize?${queryString}`;
}; 

export const getNaverToken = async (
  code: string,
  state: string
): Promise<NaverTokenResponse> => {
  const client_id = process.env.NAVER_CLIENT_ID;
  const client_secret = process.env.NAVER_CLIENT_SECRET;
  const body: NaverTokenRequest = {
    grant_type: 'authorization_code',
    client_id : 'client_id',
    client_secret : 'client_secret',
    code : 'code',
    state,
  };

  try {
    const response = await axios.post<NaverTokenResponse>(
      'https://nid.naver.com/oauth2.0/token',
        new URLSearchParams(body as Record<string,string>).toString(),
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );
    return response.data;
  } catch (e) {
    if (isApiErrorResponse(e)) {
      throw new ResponseError(e);
    }
    throw e;
  }
};
