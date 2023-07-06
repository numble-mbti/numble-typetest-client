import { AxiosError, InternalAxiosRequestConfig, AxiosInstance } from 'axios';
import { tokenCookie } from '@/utils/authToken';

export function interceptors(requestHTTP: AxiosInstance): AxiosInstance {
  requestHTTP.interceptors.request.use(
    async (config: InternalAxiosRequestConfig | any) => {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${tokenCookie.getCookie('accessToken')}`;
        return config;
      }
    },
    (error: AxiosError) => {
      return console.log(error);
    },
  );
  return requestHTTP;
}
