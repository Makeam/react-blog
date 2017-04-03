import React, { PropTypes } from 'react';
import BlogItem from 'components/ui/BlogItem';
import items from 'constants/items';
import { find } from 'lodash';

const Post = ({params}) => (
  <div>
    <BlogItem { ...find(items, (item) => {return item.id == params.id}) } />
  </div>
);

Post.propTypes = {
  params: PropTypes.object
}

export default Post;