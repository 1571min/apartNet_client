import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import Axios from 'axios';

export type userInfo = {
  email: string;
  full_name: string;
  address: string;
  access_token: string;
};

export type signinValue = {
  email: string;
  password: string;
};
export type signupValue = {
  email: string;
  password: string;
  address: string;
  full_name: string;
};

export type UserAction = ActionType<typeof actions>;
