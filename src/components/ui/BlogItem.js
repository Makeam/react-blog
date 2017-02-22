import React from 'react';
import ImageBox from './ImageBox';
import TextBox from './TextBox';
import { Panel } from 'react-bootstrap';

const DOM = React.DOM;
const BlogItem = ({props}) => (
    <Panel>
        <ImageBox img={props.img} />
        <TextBox text={props.text} />

    </Panel>
    // DOM.div(
    //     null
    //     , React.createElement(ImageBox, props)
    //     , React.createElement(TextBox, props)
    // )
);

export default BlogItem;
