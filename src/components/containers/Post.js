import React, { PropTypes } from 'react';
import BlogItem from 'components/ui/BlogItem';
import update from 'immutability-helper';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }
  
  incrementLikesCount() {
    this.setState({
      item: update(this.state.item, {
        meta:{
          likesCount: {$apply: function(x) { return x + 1; }}
        }
      })
    });
  }
  
  componentWillReceiveProps(newProps) {
    this.setState({ item: newProps.item });
  }
  
  
  render() {
    return (
      <div>
        {
          this.state.item &&
          <BlogItem
            { ...this.state.item}
            likesHandler = {() => this.incrementLikesCount()}
          />
        }
      </div>
    );
  }
}

Post.propTypes = {
  item: PropTypes.object
};

export default Post;