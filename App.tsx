import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import MainNavigator from './src/navigation/main-navigator/main-navigator';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
