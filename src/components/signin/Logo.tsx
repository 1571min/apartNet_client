import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

interface Props {}

function Logo() {
  return (
    <View style={styles.Logostyle}>
      <Image
        source={require('../../assets/favicon.png')}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
}
export default Logo;

const styles = StyleSheet.create({
  Logostyle: {
    flex: 6,
    alignItems: 'center',
  },
});
