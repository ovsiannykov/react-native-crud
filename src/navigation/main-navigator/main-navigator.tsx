import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../../screens/home-screen/home-screen';
import NewPostScreen from '../../screens/new-post-screen/new-post-screen';
import {
  DISABLED_HEADER_STYLE_CONFIG,
  HEADER_STYLE_CONFIG,
} from '../navigation-config';

export type MainStackParamsList = {
  HOME_SCREEN: undefined;
  NEW_POST_SCREEN: {postId: number} | undefined;
};

const MainStack = createStackNavigator<MainStackParamsList>();

export type HomeScreenNavigationType = NativeStackScreenProps<
  MainStackParamsList,
  'HOME_SCREEN'
>;
export type NewPostScreenNavigationType = NativeStackScreenProps<
  MainStackParamsList,
  'NEW_POST_SCREEN'
>;

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="HOME_SCREEN"
      screenOptions={HEADER_STYLE_CONFIG}>
      <MainStack.Screen
        component={HomeScreen}
        name="HOME_SCREEN"
        options={DISABLED_HEADER_STYLE_CONFIG}
      />
      <MainStack.Screen component={NewPostScreen} name="NEW_POST_SCREEN" />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
