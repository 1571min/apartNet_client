import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import InputBox from '../components/signin/InputBox';
import SinginButton from '../components/signin/SigninButton';
import Logo from '../components/signin/Logo';
import { signinRequest } from '../lib/api/auth';
import { connect, useDispatch } from 'react-redux';
import { signinSucess } from '../modules/user/actions';

interface Props {
  userinfo: string;
}

function Signin({ userinfo }: Props) {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const onchangeInputEmail = (text: string): void => {
    setUserEmail(text);
  };
  const onchangeInputPassword = (text: string): void => {
    setUserPassword(text);
  };
  const onSubmit = async () => {
    const usersInfo = await signinRequest(UserEmail, UserPassword);
    //dispatch(signinSucess(usersInfo));
    //유저의 정보를 가져와서 리덕스에 등록
  };

  return (
    <View style={styles.signinStyle}>
      <Logo />
      <InputBox name={'email'} onChange={onchangeInputEmail} />
      <InputBox name={'password'} onChange={onchangeInputEmail} />
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
