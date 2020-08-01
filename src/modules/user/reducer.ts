import { createReducer } from 'typesafe-actions';
import { userInfo, UserAction } from './types';
import { USERINFO_SAVE } from './actions';
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_SUCSESS,
  SIGNUP_FAILURE,
  SIGNOUT,
} from './actions';

const initialState: userInfo = {
  userAuth: false,
  email: '',
  address: '',
  fullName: '',
};

const userReducer = createReducer<userInfo, UserAction>(initialState, {
  [SIGNIN_SUCCESS]: (state, action) => ({ ...action.payload }),
  [USERINFO_SAVE]: (state, action) => ({ ...action.payload }),
  [SIGNIN_FAILURE]: (state) => ({ ...state }),
  [SIGNUP_SUCSESS]: (state) => ({ ...state }),
  [SIGNUP_FAILURE]: (state) => ({ ...state }),
  [SIGNOUT]: () => ({ ...initialState }),
});

export default userReducer;
