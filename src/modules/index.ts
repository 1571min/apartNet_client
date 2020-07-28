import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import { all } from 'redux-saga/effects';
import { userSaga } from './user/sagas';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([userSaga()]);
}
