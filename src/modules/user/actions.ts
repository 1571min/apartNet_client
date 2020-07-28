import { deprecated } from 'typesafe-actions';
import { userInfo, signinValue, signupValue } from './types';
import { signinResponse } from '../../lib/api/auth';
const { createAction, createStandardAction } = deprecated;

//actions
export const SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'user/SIGNIN_FAILURE';

export const SIGNUP_SUCSESS = 'user/SIGNUP_SUCSESS';
export const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE';

export const SIGNIN_REQUEST = 'user/SIGNIN_REQUEST';
export const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST';

export const SIGNOUT = 'user/SIGNOUT';

//actions creator
export const signinSuccess = createStandardAction(SIGNIN_SUCCESS)<userInfo>();
export const signinFailure = createStandardAction(SIGNIN_FAILURE)<string>();

export const signupSucess = createStandardAction(SIGNUP_SUCSESS)<userInfo>();
export const signupFailure = createStandardAction(SIGNUP_FAILURE)<string>();

export const signinRequest = createStandardAction(SIGNIN_REQUEST)<
  signinValue
>();
export const signupRequest = createStandardAction(SIGNUP_REQUEST)<
  signupValue
>();

export const signout = createStandardAction(SIGNOUT)();
