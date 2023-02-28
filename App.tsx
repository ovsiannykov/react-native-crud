import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {LogBox} from 'react-native';
import {PostsProvider} from './src/entities/post/posts-provider';
import MainNavigator from './src/navigation/main-navigator/main-navigator';
LogBox.ignoreAllLogs();

function App() {
  return (
    <NativeBaseProvider>
      <PostsProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PostsProvider>
    </NativeBaseProvider>
  );
}

export default App;
