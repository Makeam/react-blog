import React from 'react';


const DOM = React.DOM;
const TextBox = ({text}) => (
    DOM.span(
        null,
        text
    )
);

export default TextBox;
