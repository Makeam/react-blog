import React from 'react';
import { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

class LikeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>{this.state.count}</Button>
      </div>
    )
  }
}

LikeBox.defaultProps = {
  count: 0
};

LikeBox.propTypes = {
  count: PropTypes.number
};
    
export default LikeBox;