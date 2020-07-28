import apiClient from './apiClient';
import { userInfo, signinValue } from '../../modules/user/types';

/*
 * Send Auth Email
 */
export const callSigninAPI = (data: signinValue) =>
  apiClient.post<signinResponse>('/user/signin', {
    data,
  });
export type signinResponse = {
  email: string;
  full_name: string;
  address: string;
};
