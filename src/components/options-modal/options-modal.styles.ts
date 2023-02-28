import {StyleSheet} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const IS_NOTCH = hasNotch();

export default StyleSheet.create({
  viewModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: IS_NOTCH ? 44 : 34,
  },
  header: {
    alignItems: 'center',
  },
  line: {
    height: 5,
    width: 56,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  content: {
    minHeight: 10,
  },
  button: {
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
