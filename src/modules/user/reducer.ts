import { createReducer } from 'typesafe-actions';
import { userInfo, UserAction } from './types';
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_SUCSESS,
  SIGNUP_FAILURE,
  SIGNOUT,
} from './actions';

const initialState: userInfo = {
  email: '',
  address: '',
  full_name: '',
  access_token: '',
};

const userReducer = createReducer<userInfo, UserAction>(initialState, {
  [SIGNIN_SUCCESS]: (state, action) => ({ ...state, ...action.payload }),
  [SIGNIN_FAILURE]: (state) => ({ ...state }),
  [SIGNUP_SUCSESS]: (state) => ({ ...state }),
  [SIGNUP_FAILURE]: (state) => ({ ...state }),
  [SIGNOUT]: () => ({ ...initialState }),
});

export default userReducer;
