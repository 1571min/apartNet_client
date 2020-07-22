import { TextInput, View } from 'react-native';
import Login from './components/login/Login';
import React from 'react';

interface Props {}

const Main: React.FC = ({}: Props) => {
  return (
    <View style={{ flex: 10 }}>
      <View style={{ flex: 8 }}></View>
      <Login userinfo="lee" />
    </View>
  );
};

export default Main;
