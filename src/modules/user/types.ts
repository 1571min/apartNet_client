import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type userInfo = {
  email: string;
  full_name: string;
  address: string;
};

export type UserAction = ActionType<typeof actions>;
