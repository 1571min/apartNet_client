import apiClient from './apiClient';
import { userInfo, signinValue } from '../../modules/user/types';

/*
 * Send Auth Email
 */
export const callSigninAPI = (inputValue: signinValue) =>
  apiClient.post<signinResponse>('/user/signin', {
    inputValue,
  });
export const callUserInfoAPI = (token: string) =>
  apiClient.get<userInfoResponse>('/user/userinfo', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export type signinResponse = {
  access_token: '';
  token_type: '';
  expires_in: number;
};
export type userInfoResponse = {
  email: string;
  fullName: string;
  address: string;
};
