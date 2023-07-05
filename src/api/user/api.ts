import axios from 'axios';
import { tokenCookie } from '@/utils/authToken';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;

const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json; charset=utf-8',
  withCredentials: true,
};

const api = axios.create({ baseURL: BASE_URL, headers: HEADERS });

export async function ssoLogin(social: string): Promise<void> {
  const uri = `/api/oauth2/${social}`;

  if (social === 'kakao') {
    await api
      .get(uri)
      .then((res) => {
        console.log('res', res);

        const kakaoLogin = res.data.url;
        window.location.href = kakaoLogin;
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (social === 'google') {
    // ...
  }
}

export async function getAccessToken(social: string, code: string) {
  const uri = `api/afterlogin/${social}?code=${code}`;
  const res = await api.get(uri);
  tokenCookie.setCookie('accessToken', res.data.access_token, 1);
  return res.data;
}
