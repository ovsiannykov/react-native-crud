import {Text} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text fontSize="3xl" bold color="emerald.400">
        Hello
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
