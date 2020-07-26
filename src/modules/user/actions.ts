import { deprecated } from 'typesafe-actions';
import { userInfo } from './types';
import { signinResponse } from '../../lib/api/auth';
const { createAction, createStandardAction } = deprecated;

export const SIGNIN_SUCSESS = 'user/SIGNIN_SUCSESS';
export const SIGNIN_FAILURE = 'user/SIGNIN_FAILURE';
export const SIGNUP_SUCSESS = 'user/SIGNUP_SUCSESS';
export const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE';

export const signinSucess = createStandardAction(SIGNIN_SUCSESS)<
  signinResponse
>();
export const signinFailure = createStandardAction(SIGNIN_FAILURE)<string>();
export const signupSucess = createStandardAction(SIGNUP_SUCSESS)<
  signinResponse
>();
export const signupFailure = createStandardAction(SIGNUP_FAILURE)<string>();
