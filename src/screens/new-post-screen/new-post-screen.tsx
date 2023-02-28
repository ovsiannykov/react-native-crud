import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, FormControl, Input} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {usePostsContext} from '../../entities/post/posts-provider';
import {NewPostScreenNavigationType} from '../../navigation/main-navigator/main-navigator';
import LoadingScreen from '../loading-screen/loading-screen';
import styles from './new-post-screen.styles';

type HomeScreenNavigationProp = NewPostScreenNavigationType['navigation'];
type HomeScreenRouteProp = NewPostScreenNavigationType['route'];

function NewPostScreen() {
  const {isLoading, sendPost, posts, updatePost} = usePostsContext();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();
  const id = route.params?.postId;
  const post = posts?.filter(el => el.id === id);

  // fields:
  const [title, setTitle] = useState(post?.length ? post[0].title : '');
  const [text, setText] = useState(post?.length ? post[0].text : '');
  const [image, setImage] = useState(post?.length ? post[0].image : '');
  const [url, setUrl] = useState(post?.length ? post[0].url : '');

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit Post' : 'New Post',
    });
  }, [id, navigation]);

  const saveHandler = useCallback(() => {
    if (!title || !text || !image || !url) {
      Alert.alert('Oops...', 'Please fill in all fields');
      return;
    }

    const body = {title, text, image, url};

    id ? updatePost(id, body, goBack) : sendPost(body, goBack);
  }, [goBack, id, image, sendPost, text, title, updatePost, url]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Sorry for the lack of validation

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.formItem}>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}>
              Title
            </FormControl.Label>
            <Input
              placeholder="Enter title"
              value={title}
              onChangeText={setTitle}
            />
          </FormControl>
        </View>
        <View style={styles.formItem}>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}>
              Text
            </FormControl.Label>
            <Input
              placeholder="Enter description"
              value={text}
              onChangeText={setText}
            />
          </FormControl>
        </View>
        <View style={styles.formItem}>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}>
              Iamge
            </FormControl.Label>
            <Input
              placeholder="Enter image url"
              value={image}
              onChangeText={setImage}
            />
          </FormControl>
        </View>
        <View style={styles.formItem}>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
              }}>
              Post Url
            </FormControl.Label>
            <Input
              placeholder="Enter post url"
              value={url}
              onChangeText={setUrl}
            />
          </FormControl>
        </View>
        <Button
          colorScheme="blueGray"
          _text={styles.buttonText}
          onPress={saveHandler}>
          {id ? 'Save' : 'Create'}
        </Button>
      </View>
    </View>
  );
}

export default NewPostScreen;
