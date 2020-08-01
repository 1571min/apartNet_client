import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import Axios from 'axios';

export type userInfo = {
  userAuth: Boolean;
  email: string;
  fullName: string;
  address: string;
};

export type signinValue = {
  email: string;
  password: string;
};
export type signupValue = {
  email: string;
  password: string;
  address: string;
  fullName: string;
};

export type UserAction = ActionType<typeof actions>;
