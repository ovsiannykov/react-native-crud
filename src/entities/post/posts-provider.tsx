import axios from 'axios';
import React, {useContext} from 'react';
import {Alert} from 'react-native';
import {Post, PostSendData} from '../../types/post';

const BASE_URL = 'https://yourtestapi.com/api/posts/';

export const postsContext = React.createContext<PostContext>(undefined!);

type PostContext = {
  posts: Post[] | null;
  getPosts: InstanceType<typeof PostsProvider>['getPosts'];
  isLoading: boolean;
  sendPost: InstanceType<typeof PostsProvider>['sendPost'];
  deletePost: InstanceType<typeof PostsProvider>['deletePost'];
};

type Props = {
  children: React.ReactNode;
};

type State = {
  context: PostContext;
};

export class PostsProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      context: {
        posts: null,
        getPosts: this.getPosts,
        isLoading: false,
        sendPost: this.sendPost,
        deletePost: this.deletePost,
      },
    };
  }

  getPosts = async () => {
    this.setState(prev => ({context: {...prev.context, isLoading: true}}));

    try {
      const res = await axios.get(BASE_URL);

      if (res.status === 200) {
        await this.setState(prev => ({
          context: {...prev.context, posts: res.data},
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState(prev => ({context: {...prev.context, isLoading: false}}));
    }
  };

  sendPost = async (body: PostSendData, goBack: () => void) => {
    this.setState(prev => ({context: {...prev.context, isLoading: true}}));

    try {
      const res = await axios.post(BASE_URL, body);

      if (res.status === 200 || res.status === 201) {
        this.state.context.getPosts();
        Alert.alert('Post uploaded 🎉');
        goBack();
      } else {
        Alert.alert('Ooops...', 'Something went wrong');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Ooops...', 'Something went wrong');
    } finally {
      this.setState(prev => ({context: {...prev.context, isLoading: false}}));
    }
  };

  deletePost = async (id: number | null) => {
    this.setState(prev => ({context: {...prev.context, isLoading: true}}));

    if (id !== null) {
      try {
        const res = await axios.delete(`${BASE_URL}${id}/`);

        if (res.status === 200 || res.status === 201) {
          this.state.context.getPosts();
          Alert.alert('Post deleted 🎉');
        } else {
          Alert.alert('Ooops...', 'Something went wrong');
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Ooops...', 'Something went wrong');
      } finally {
        this.setState(prev => ({context: {...prev.context, isLoading: false}}));
      }
    }
    return;
  };

  render(): JSX.Element {
    return (
      <postsContext.Provider value={this.state.context}>
        {this.props.children}
      </postsContext.Provider>
    );
  }
}

export const usePostsContext = () => useContext(postsContext);
