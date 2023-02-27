import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/home-screen/home-screen';
import {DISABLED_HEADER_STYLE_CONFIG} from '../navigation-config';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        component={HomeScreen}
        name="Home"
        options={DISABLED_HEADER_STYLE_CONFIG}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
