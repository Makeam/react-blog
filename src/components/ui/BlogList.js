import React, { PropTypes } from 'react';
import BlogItem from 'components/ui/BlogItem';
import _ from 'lodash';

const BlogList = ({items, likesHandler}) => {
  const blogItems = _.map(items, item => (
            <div key={item.id}>
                <BlogItem
                  {...item}
                  likesHandler = {() => likesHandler(item.id)}
                />
            </div>
        )
    );
  return (<div>{blogItems}</div>);
};

const {image, text, meta} = BlogItem.propTypes;
const itemType = {image, text, meta};

BlogList.propTypes = {
  items: PropTypes.arrayOf(itemType),
  likesHandler: PropTypes.func.isRequired
};

export default BlogList;
