import {useNavigation} from '@react-navigation/native';
import {Button, Text} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  View,
} from 'react-native';
import PlusIcon from '../../assets/icons/plus.svg';
import OptionsModal from '../../components/options-modal/options-modal';
import PostListItem from '../../components/post-list-item/post-list-item';
import {usePostsContext} from '../../entities/post/posts-provider';
import {Post} from '../../types/post';
import styles from './home-screen.styles';

const HomeScreen = () => {
  const {isLoading, posts, getPosts} = usePostsContext();
  const navigation = useNavigation();
  const [isOpenOptionsModal, setIsOpenOptionsModal] = useState<boolean>(false);
  const keyExtractor = useCallback((item: Post) => item.id.toString(), []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const linkToNewPostScreen = useCallback(() => {
    navigation.navigate('NEW_POST_SCREEN');
  }, [navigation]);

  const optionsModalHandler = useCallback(() => {
    setIsOpenOptionsModal(true);
  }, []);

  const renderPostItem: ListRenderItem<Post> = useCallback(
    ({item}) => <PostListItem post={item} onPress={optionsModalHandler} />,
    [optionsModalHandler],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text fontSize="3xl" fontWeight="800" color="primary.800" mt={4} mb={4}>
          CRUD APP
        </Text>
        <Button onPress={linkToNewPostScreen} colorScheme="blueGray">
          <PlusIcon width={24} height={24} fill="white" />
        </Button>
      </View>
      <FlatList
        style={styles.postList}
        data={posts}
        keyExtractor={keyExtractor}
        renderItem={renderPostItem}
        initialNumToRender={10}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getPosts}
            tintColor="#d4d4d4"
          />
        }
        ListEmptyComponent={() => (
          <Text
            fontSize="lg"
            color="muted.400"
            textAlign="center"
            mt={4}
            mb={4}>
            No posts
          </Text>
        )}
      />
      <OptionsModal
        isModal={isOpenOptionsModal}
        setModal={setIsOpenOptionsModal}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
