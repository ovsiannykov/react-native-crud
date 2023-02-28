import axios from 'axios';
import React, {useContext} from 'react';
import {Post} from '../../types/post';

export const postsContext = React.createContext<PostContext>(undefined!);

type PostContext = {
  posts: Post[] | null;
  getPosts: InstanceType<typeof PostsProvider>['getPosts'];
  isLoading: boolean;
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
      },
    };
  }

  getPosts = async () => {
    this.setState(prev => ({context: {...prev.context, isLoading: true}}));

    try {
      const res = await axios.get('https://yourtestapi.com/api/posts/');

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

  render(): JSX.Element {
    return (
      <postsContext.Provider value={this.state.context}>
        {this.props.children}
      </postsContext.Provider>
    );
  }
}

export const usePostsContext = () => useContext(postsContext);
