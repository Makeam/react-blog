import React, { PropTypes } from 'react';
import BlogItem from 'components/ui/BlogItem';
import { map } from 'lodash/collection';
import { postPath } from 'helpers/routes';

const BlogList = ({items, likesHandler}) => {
  let i = -1;
  const blogItems = map(items, item => {
    i += 1;
    let y = i;
    let postUrl = postPath(item.id);
    return (
      <div key={item.id}>
        <BlogItem
          {...item}
          likesHandler = {() => likesHandler(y)}
          url = {postUrl}
        />
      </div>
    );}
  );
  return (<div>{blogItems}</div>);
};

const {image, text, meta} = BlogItem.propTypes;
// const itemType = {image, text, meta};

BlogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOfType([image, text, meta])),
  likesHandler: PropTypes.func.isRequired
};

export default BlogList;
