import { UserAction } from './types';
import {
  signinSuccess,
  signinRequest,
  signinFailure,
  SIGNIN_REQUEST,
} from './actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import { callSigninAPI } from '../../lib/api/auth';

function* userSigninSaga(action: ReturnType<typeof signinRequest>) {
  try {
    const userinfo = yield call(callSigninAPI, action.payload);
    //token
    console.log(userinfo.data);
    //token dispatch해야됨
    yield put(signinSuccess(userinfo.data));
  } catch (e) {
    yield put(signinFailure(e));
  }
}

export function* userSaga() {
  yield takeEvery(SIGNIN_REQUEST, userSigninSaga);
}
