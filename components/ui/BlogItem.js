const DOM = React.DOM;
const BlogItem = ({props}) => (
    DOM.div(
        null
        , React.createElement(ImageBox, props)
        , React.createElement(TextBox, props)
    )
);
