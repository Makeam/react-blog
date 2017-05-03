import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';
import { postPath } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const Index = {
  path: '/',
  component: BlogPage,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postPath(),
  component: Post,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};