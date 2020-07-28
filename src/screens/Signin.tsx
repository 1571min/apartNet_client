import { StyleSheet, TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import React from 'react';
import InputBox from '../components/signin/InputBox';
import SinginButton from '../components/signin/SigninButton';
import Logo from '../components/signin/Logo';
import { connect, useDispatch, useSelector } from 'react-redux';
import { signinRequest } from '../modules/user';
import axios from 'axios';
import { RootState } from '../modules/index';

interface Props {
  userinfo: string;
}

function Signin({ userinfo }: Props) {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const email = useSelector((state: RootState) => state.userReducer.email);
  const access_token = useSelector(
    (state: RootState) => state.userReducer.access_token
  );
  const dispatch = useDispatch();

  const onchangeInputEmail = (text: string): void => {
    setUserEmail(text);
  };
  const onchangeInputPassword = (text: string): void => {
    setUserPassword(text);
  };
  const onSubmit = async () => {
    dispatch(signinRequest({ email: UserEmail, password: UserPassword }));
  };

  return (
    <View style={styles.signinStyle}>
      <Text>{access_token}</Text>
      <InputBox name={'email'} onChange={onchangeInputEmail} />
      <InputBox name={'password'} onChange={onchangeInputPassword} />
      <SinginButton name={'singin'} onPressHandler={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  signinStyle: {
    flex: 2,
    margin: 30,
    alignItems: 'center',
  },
});

export default connect(null, null)(Signin);
