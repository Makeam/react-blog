import MainLayout from 'components/layouts/MainLayout';
import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';
import { postPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
}