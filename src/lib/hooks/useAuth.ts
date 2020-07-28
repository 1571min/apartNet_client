import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../modules/index';
import { signinSucess } from '../../modules/user/actions';
import { userInfo } from '../../modules/user/types';

export default function useAuth() {
  const email = useSelector((state: RootState) => state.userReducer.email);
  const address = useSelector((state: RootState) => state.userReducer.address);
  const full_name = useSelector(
    (state: RootState) => state.userReducer.full_name
  );

  const dispatch = useDispatch();

  const onSignin = useCallback(
    (user: userInfo) => dispatch(signinSucess(user)),
    [dispatch]
  );

  return {
    email,
    address,
    full_name,
    onSignin,
  };
}
