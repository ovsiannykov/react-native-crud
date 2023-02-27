import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/home-screen/home-screen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen component={HomeScreen} name="Home" />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
