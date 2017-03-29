import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const LikeBox = ({count, clickHandler}) => (
  <div>
    <Button onClick={clickHandler}>{count}</Button>
  </div>
);


LikeBox.defaultProps = {
  count: 0
};

LikeBox.propTypes = {
  count: PropTypes.number,
  clickHandler: PropTypes.func.isRequired
};
    
export default LikeBox;