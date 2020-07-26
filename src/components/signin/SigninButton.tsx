import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  name: string;
  onPressHandler?: any;
}

function SinginButton({ name, onPressHandler }: Props) {
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.buttonStyle}>
      <Text style={{ color: 'white' }}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    width: '50%',
    borderWidth: 1,
    alignItems: 'center',
    borderBottomColor: 'black',
    backgroundColor: '#5A7EB2',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    elevation: 8,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
});

export default SinginButton;
