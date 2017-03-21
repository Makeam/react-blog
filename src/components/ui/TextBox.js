import {DOM, PropTypes} from 'react';


const TextBox = (props) => (
    DOM.span(
        null,
        props.text
    )
);

TextBox.defaultProps = {
  text: 'No content'
};

TextBox.propTypes = {
  text: PropTypes.string
};

export default TextBox;
