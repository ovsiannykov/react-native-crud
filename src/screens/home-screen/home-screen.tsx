import {Text} from 'native-base';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import PostListItem from '../../components/post-list-item/post-list-item';
import {POST_MOCKS_EXAPMLE} from '../../types/post';
import styles from './home-screen.styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text fontSize="3xl" fontWeight="800" color="primary.800" mt={4} mb={4}>
          Welcome to my App!
        </Text>
        <PostListItem post={POST_MOCKS_EXAPMLE} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
