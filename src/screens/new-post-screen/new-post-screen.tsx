import {useNavigation} from '@react-navigation/native';
import {Button, FormControl, Input} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import styles from './new-post-screen.styles';

function NewPostScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'New Post',
    });
  }, [navigation]);

  const saveHandler = useCallback(() => {
    if (
      title.length > 3 ||
      !title ||
      text.length > 3 ||
      !text ||
      image.length > 3 ||
      !image ||
      url.length > 3 ||
      url
    ) {
      Alert.alert(
        'Oops...',
        'Please fill in all fields, and check their length',
      );
      return;
    }
    console.log('succes');
  }, [image, text, title, url]);

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
