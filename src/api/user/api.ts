import axios from 'axios';
import { interceptors } from '../interceptor';
import { tokenCookie } from '@/utils/authToken';

import * as T from '@/types/user';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;

const HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json; charset=utf-8',
  withCredentials: true,
};

const api = axios.create({ baseURL: BASE_URL, headers: HEADERS });
const apiWithToken = interceptors(api);

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

export async function getAccessToken(social: string, code: string): Promise<T.OAuthResponse> {
  const uri = `api/afterlogin/${social}?code=${code}`;
  const res = await api.get(uri);

  const userData = {
    email: res.data.email,
    nickname: res.data.nickname,
  };

  // 유저 데이터 임시로 localStorage에 저장
  window.localStorage.setItem('userData', JSON.stringify(userData));
  tokenCookie.setCookie('accessToken', res.data.access_token, 1);
  return res.data;
}

export async function getMyTestResult(size?: number): Promise<T.MyTestResultList> {
  const setUri = () => {
    if (size) {
      return `api/archives?size=${size}`;
    } else {
      return `api/archives?size=3`;
    }
  };
  const uri = setUri();
  const res = await apiWithToken.get(uri);

  return res.data;
}

export async function getMyResultWithCategory(categoryId: number): Promise<T.ArchiveWithCategory> {
  const uri = `api/archives/${categoryId}`;
  const res = await apiWithToken.get(uri);

  console.log(res);
  return res.data;
}

export async function editMyNickname(userId: number): Promise<T.UserData> {
  const uri = `api/users?userId=${userId}`;
  const res = await apiWithToken.get(uri);

  console.log(res.status);
  return res.data;
}
