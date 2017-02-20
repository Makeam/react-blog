import React from 'react';
import ImageBox from './ImageBox';
import TextBox from './TextBox';

const DOM = React.DOM;
const BlogItem = ({props}) => (
    DOM.div(
        null
        , React.createElement(ImageBox, props)
        , React.createElement(TextBox, props)
    )
);

export default BlogItem;
