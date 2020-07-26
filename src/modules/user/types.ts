import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import Axios from 'axios';

export type userInfo = {
  email: string;
  full_name: string;
  address: string;
};

export type UserAction = ActionType<typeof actions>;
