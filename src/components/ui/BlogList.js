import React from 'react';
import BlogItem from './BlogItem';
import _ from 'lodash';

const DOM = React.DOM;
const BlogList = ({items}) => (
    DOM.ul(
        null,
        _.map(
            items,
            (item, key) => (
                DOM.li(
                    {key},
                    React.createElement(BlogItem, {props: item})
                )
            )
        )
    )
);

export default BlogList;
