import { UserAction } from './types';
import {
  signinSuccess,
  signinRequest,
  signinFailure,
  SIGNIN_REQUEST,
} from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { callSigninAPI, callUserInfoAPI } from '../../lib/api/auth';
import * as SecureStore from 'expo-secure-store';
import {
  USERINFO_SAVE_REQUEST,
  userInfoRequestFailure,
  userInfoSave,
} from './actions';

/*
 * signin 요청을 보내고 토큰을 받아서 저장하는 saga
 */
function* userSigninSaga(action: ReturnType<typeof signinRequest>) {
  try {
    const res = yield call(callSigninAPI, action.payload);
    const token = res.data.access_token;
    if (token) {
      const userInfo = yield call(callUserInfoAPI, token);
      yield put(userInfoSave({ ...userInfo.data, userAuth: true }));
      SecureStore.setItemAsync('token', token);
    }
  } catch (e) {
    yield put(signinFailure(e));
  }
}

/*
 * 토큰을 꺼내서 유저의 정보를 저장하는 saga
 */
function* userInfoSaga() {
  try {
    const token = yield SecureStore.getItemAsync('token');
    if (token) {
      const userInfo = yield call(callUserInfoAPI, token);
      yield put(userInfoSave(userInfo.data));
    }
  } catch (e) {
    yield put(userInfoRequestFailure(e));
  }
}

export function* userSaga() {
  yield takeEvery(SIGNIN_REQUEST, userSigninSaga);
  yield takeEvery(USERINFO_SAVE_REQUEST, userInfoSaga);
}
