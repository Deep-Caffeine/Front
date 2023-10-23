import createRequest from "@/app/utils/instanceApi";
import ResponseError, {isApiErrorResponse}  from "@/app/utils/ResponseError";
import {KakaoAccessRequest, KakaoAccessResponse ,KakaoLoginRequest, KakaoLoginResponse} from "./kakaoType";
import axios from "axios";


const KAKAO_ACCESS_API_URL = 'https://kauth.kakao.com/oauth/authorize';
const KAKAO_API_URL = 'https://kauth.kakao.com/oauth/token'


export const accessLoginKakao = async ():Promise<KakaoAccessResponse> => {
    try {
        const client_id = 'REST_API_KEY'; 
        const redirectUri = 'http://localhost:3000'; 

        const params: KakaoAccessRequest = {
            'client_id': client_id,
            'redirect_uri': redirectUri,
            'response_type': 'code',
        };

        const authorizeCode = await axios.get<KakaoAccessResponse>(KAKAO_ACCESS_API_URL, {
            params,
        });

        return authorizeCode.data;
    }
    catch (e) {
        if (isApiErrorResponse(e)) {
          throw new ResponseError(e);
        }
        throw e;
    }
};

export const loginWithKakao = async (authorizeCode:string):Promise<KakaoLoginResponse> => {
    try{
        const client_id = 'REST_API_KEY'; 
        const redirectUri = 'http://localhost:3000'; 

        const body: KakaoLoginRequest = {
            'grant_type' : 'authorization_code',
            'client_id': client_id,
            'redirect_uri': redirectUri,
            'code': authorizeCode,
        };

        const accessToken = await axios.post<KakaoLoginResponse>(KAKAO_API_URL, {
            body,
            headers : {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })

        return accessToken.data
    } catch (e) {
        if (isApiErrorResponse(e)) {
          throw new ResponseError(e);
        }
        throw e;
    }
}