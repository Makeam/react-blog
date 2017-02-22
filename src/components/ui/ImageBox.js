import React from 'react';
import { Image } from 'react-bootstrap'

const DOM = React.DOM;
const ImageBox = ({img}) => (
    <Image src={img.src} width={img.width} height={img.height} alt={img.alt} rounded/>
);

export default ImageBox;