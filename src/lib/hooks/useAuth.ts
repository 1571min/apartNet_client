import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../modules/index';
import {
  signinSuccess,
  signinRequest,
  userInfoSave,
  userInfoSaveRequest,
} from '../../modules/user/actions';
import { userInfo, signinValue } from '../../modules/user/types';

export default function useAuth() {
  const email = useSelector((state: RootState) => state.userReducer.email);
  const address = useSelector((state: RootState) => state.userReducer.address);
  const fullName = useSelector(
    (state: RootState) => state.userReducer.fullName
  );

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (user: signinValue) => dispatch(signinRequest(user)),
    [dispatch]
  );
  const setUserInfo = useCallback(() => dispatch(userInfoSaveRequest()), [
    dispatch,
  ]);

  return {
    email,
    address,
    fullName,
    onSubmit,
    setUserInfo,
  };
}
