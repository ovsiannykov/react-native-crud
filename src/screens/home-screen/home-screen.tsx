import {Text} from 'native-base';
import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  View,
} from 'react-native';
import PostListItem from '../../components/post-list-item/post-list-item';
import {usePostsContext} from '../../entities/post/posts-provider';
import {Post} from '../../types/post';
import styles from './home-screen.styles';

const HomeScreen = () => {
  const {isLoading, posts, getPosts} = usePostsContext();
  const keyExtractor = useCallback((item: Post) => item.id.toString(), []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const renderPostItem: ListRenderItem<Post> = useCallback(
    ({item}) => <PostListItem post={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text fontSize="3xl" fontWeight="800" color="primary.800" mt={4} mb={4}>
          Welcome to my App!
        </Text>
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
