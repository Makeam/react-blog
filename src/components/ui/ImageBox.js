import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';

const ImageBox = ({src, width, height, alt}) => (
  <Image src={src} width={'100%'} height={height} alt={alt} rounded responsive/>
);

ImageBox.defaultProps = {
  alt: 'default img'
  , src: 'https://yandex.ru/images/today?size=200x120'
  , width: '200px'
  , height: '120px'
};

ImageBox.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};


export default ImageBox;