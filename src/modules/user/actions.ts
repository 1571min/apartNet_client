import { deprecated } from 'typesafe-actions';
import { userInfo, signinValue, signupValue } from './types';
import { signinResponse } from '../../lib/api/auth';
const { createAction, createStandardAction } = deprecated;

//actions
export const SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'user/SIGNIN_FAILURE';
export const SIGNIN_REQUEST = 'user/SIGNIN_REQUEST';

export const SIGNUP_SUCSESS = 'user/SIGNUP_SUCSESS';
export const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE';
export const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST';

export const USERINFO_SAVE_REQUEST = 'user/USERINFO_SAVE_REQUEST';
export const USERINFO_REQUEST_FAILURE = 'user/USERINFO_REQUEST_FAILURE';
export const USERINFO_SAVE = 'user/USERINFO_SAVE';

export const SIGNOUT = 'user/SIGNOUT';

//actions creator
export const signinSuccess = createStandardAction(SIGNIN_SUCCESS)<userInfo>();
export const signinFailure = createStandardAction(SIGNIN_FAILURE)<string>();

export const signupSucess = createStandardAction(SIGNUP_SUCSESS)<Boolean>();
export const signupFailure = createStandardAction(SIGNUP_FAILURE)<string>();

export const signinRequest = createStandardAction(SIGNIN_REQUEST)<
  signinValue
>();

export const userInfoSaveRequest = createStandardAction(
  USERINFO_SAVE_REQUEST
)();
export const userInfoSave = createStandardAction(USERINFO_SAVE)<userInfo>();
export const userInfoRequestFailure = createStandardAction(
  USERINFO_REQUEST_FAILURE
)<string>();

export const signupRequest = createStandardAction(SIGNUP_REQUEST)<
  signupValue
>();

export const signout = createStandardAction(SIGNOUT)();
