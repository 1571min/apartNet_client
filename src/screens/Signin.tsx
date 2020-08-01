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
import useAuth from '../lib/hooks/useAuth';

function Signin() {
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const { email, address, fullName, setUserInfo, onSubmit } = useAuth();

  const onchangeInputEmail = (text: string): void => {
    setUserEmail(text);
  };
  const onchangeInputPassword = (text: string): void => {
    setUserPassword(text);
  };

  return (
    <View style={styles.signinStyle}>
      <Text>{email}</Text>
      <Text>{address}</Text>
      <Text>{fullName}</Text>
      <InputBox name={'email'} onChange={onchangeInputEmail} />
      <InputBox name={'password'} onChange={onchangeInputPassword} />
      <SinginButton
        name={'singin'}
        onPressHandler={() => {
          onSubmit({ email: UserEmail, password: UserPassword });
        }}
      />
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
