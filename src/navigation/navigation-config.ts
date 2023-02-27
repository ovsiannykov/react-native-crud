import {StackNavigationOptions} from '@react-navigation/stack';

export const HEADER_STYLE_CONFIG: StackNavigationOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: 'white',
  },
  headerBackTitleStyle: {
    color: 'black',
    fontSize: 12,
  },
  headerTintColor: 'black',
  headerShadowVisible: false,
  headerTitleStyle: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
};

export const DISABLED_HEADER_STYLE_CONFIG = {
  headerShown: false,
};
