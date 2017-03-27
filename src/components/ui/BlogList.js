import React from 'react';
import BlogItem from './BlogItem';
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

export default BlogList;
