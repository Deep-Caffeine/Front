import { google } from 'googleapis';
import axios from 'axios';
import { GoogleAccessRequest, GoogleLoginRequest, GoogleLoginResponse } from './google';

const GOOGLE_OAUTH2_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';

export const accessLoginGoogle = async (): Promise<string> => {
  const client_id = process.env.GOOGLE_CLIENT_ID; 
  const redirect_uri = process.env.REDIRECT_URI; 

  const oauth2Client = new google.auth.OAuth2(client_id, '', redirect_uri);

  // Generate the url that will be used for the consent dialog.
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
  });
};

export const loginWithGoogle = async (code: string): Promise<GoogleLoginResponse> => {
  const client_id = process.env.GOOGLE_CLIENT_ID;
  const client_secret = process.env.GOOGLE_CLIENT_SECRET;
  const redirect_uri = process.env.REDIRECT_URI;

  const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri);

  try {
    // Exchange authorization code for access token
    const response = await oauth2Client.getToken(code);
    
    if (!response.tokens.access_token || !response.tokens.expiry_date) {
      throw new Error('Failed to get token from Google');
    }

    try {
        // Send the token to your backend server
        await axios.post(GOOGLE_OAUTH2_URL, {
          access_token: response.tokens.access_token,
          refresh_token: response.tokens.refresh_token || undefined,
          id_token: response.tokens.id_token || undefined,
        });
  
        console.log("토큰 전송 성공.");
  
      } catch (error) {
        console.error(error);
      }

    return {
      access_token: response.tokens.access_token,
      expiry_date: response.tokens.expiry_date,
      refresh_token: response.tokens.refresh_token || undefined,
      id_token: response.tokens.id_token || undefined,
   };
    
} catch (error) {
   console.error('Error during login with Google:', error);
   throw error;
}
};
