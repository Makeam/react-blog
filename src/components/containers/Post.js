import React, { PropTypes } from 'react';
import BlogItem from 'components/ui/BlogItem';
import update from 'immutability-helper';
import request from 'superagent';
import { API_SERVER_PATH } from 'constants/blogConfig';
import { camelizeKeys } from 'humps';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //page: props.params.id,
      item: {}
    };
  }
  
  // componentDidMount() {
  //   this.fetchPost();
  // }
  
  // fetchPost() {
  //   request
  //     .get(`${API_SERVER_PATH}/posts/${this.state.page}`)
  //     .set({Accept: 'application/json'})
  //     .end((err, res) => this.setState({ item: camelizeKeys(res.body) }));
  // }
  
  incrementLikesCount() {
    this.setState({
      item: update(this.state.item, {
        meta:{
          likesCount: {$apply: function(x) { return x + 1; }}
        }
      })
    });
  }
  
  
  render() {
    return (
      <div>
        {
          item &&
          <BlogItem
            { ...this.props.item}
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