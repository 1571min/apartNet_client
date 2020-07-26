import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

interface Props {
  name: string;
  onChange: (text: string) => void;
}

function InputBox({ name, onChange }: Props) {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={name}
      defaultValue={''}
      onChangeText={onChange}
    />
  );
}
export default InputBox;

const styles = StyleSheet.create({
  inputStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderBottomColor: 'black',
    width: '80%',
    marginBottom: 10,
    borderRadius: 30,
  },
});
