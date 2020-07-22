import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import React from 'react';

interface Props {
  userinfo: string;
}

function Login({ userinfo }: Props) {
  const [userEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');

  const onchangeInputEmail = (text: string): void => {
    useState(text);
  };
  const onchangeInputPassword = (text: string): void => {
    useState(text);
  };

  return (
    <View style={{ flex: 2, margin: 15 }}>
      <TextInput
        style={styles.TextInput}
        placeholder={'test'}
        defaultValue={userinfo}
        onChangeText={onchangeInputEmail}
      />
      <TextInput
        style={styles.TextInput}
        placeholder={'test'}
        defaultValue={userinfo}
        onChangeText={onchangeInputPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 30,
  },
});

export default Login;
