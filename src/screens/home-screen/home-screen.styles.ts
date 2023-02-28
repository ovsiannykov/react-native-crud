import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
    paddingHorizontal: 16,
  },
  postList: {
    height: '90%',
    paddingHorizontal: 16,
  },
});
