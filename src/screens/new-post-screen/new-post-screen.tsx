import {useNavigation} from '@react-navigation/native';
import {Button, FormControl, Input} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {usePostsContext} from '../../entities/post/posts-provider';
import LoadingScreen from '../loading-screen/loading-screen';
import styles from './new-post-screen.styles';

function NewPostScreen() {
  const navigation = useNavigation();
  const {isLoading, sendPost} = usePostsContext();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: 'New Post',
    });
  }, [navigation]);

  const saveHandler = useCallback(() => {
    if (!title || !text || !image || !url) {
      Alert.alert('Oops...', 'Please fill in all fields');
      return;
    }

    sendPost({title, text, image, url}, goBack);
  }, [goBack, image, sendPost, text, title, url]);

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
          Create
        </Button>
      </View>
    </View>
  );
}

export default NewPostScreen;
