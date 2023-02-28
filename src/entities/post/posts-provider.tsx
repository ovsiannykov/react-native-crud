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
        Alert.alert('Post uploaded 🎉');
        this.state.context.getPosts();
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

  render(): JSX.Element {
    return (
      <postsContext.Provider value={this.state.context}>
        {this.props.children}
      </postsContext.Provider>
    );
  }
}

export const usePostsContext = () => useContext(postsContext);
