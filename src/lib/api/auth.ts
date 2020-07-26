import apiClient from './apiClient';
import { userInfo } from '../../modules/user/types';

/*
 * Send Auth Email
 */
export const signinRequest = (email: string, password: string) =>
  apiClient.post<signinResponse>('/user/signin', {
    email,
    password,
  });
export type signinResponse = {
  email: string;
  full_name: string;
  address: string;
};
