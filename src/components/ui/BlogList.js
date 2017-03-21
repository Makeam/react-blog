import React from 'react';
import BlogItem from './BlogItem';
import _ from 'lodash';

const BlogList = ({items}) => {
  const blogItems = _.map(items, item => (
            <div key={item.id}>
                <BlogItem {...item}/>
            </div>
        )
    );
  return (<div>{blogItems}</div>);
};

export default BlogList;
