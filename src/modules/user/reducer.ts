import { createReducer } from 'typesafe-actions';
import { userInfo, UserAction } from './types';
import {
  SIGNIN_SUCSESS,
  SIGNIN_FAILURE,
  SIGNUP_SUCSESS,
  SIGNUP_FAILURE,
} from './actions';

const initialState: userInfo = {
  email: '',
  address: '',
  full_name: '',
};

const userReducer = createReducer<userInfo, UserAction>(initialState, {
  [SIGNIN_SUCSESS]: (state) => ({ ...state }),
  [SIGNIN_FAILURE]: (state) => ({ ...state }),
  [SIGNUP_SUCSESS]: (state) => ({ ...state }),
  [SIGNUP_FAILURE]: (state) => ({ ...state }),
});

export default userReducer;
