import { TextInput, View } from 'react-native';
import React from 'react';
import Signin from './screens/Signin';

interface Props {}

const Main: React.FC = ({}: Props) => {
  return <Signin userinfo="lee" />;
};

export default Main;
