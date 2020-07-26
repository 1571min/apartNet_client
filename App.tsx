import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/modules/index';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Main />
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
