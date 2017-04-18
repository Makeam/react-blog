import React from 'react';
import BlogList from 'components/ui/BlogList';
import Chart from 'components/ui/Chart';
import { Row, Col } from 'react-bootstrap';
import update from 'immutability-helper';
import request from 'superagent';
import { camelizeKeys } from 'humps';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  componentDidMount() {
    this.fetchPosts();
  }
  
  incrementLikesCount(itemId) {
    const newItems = update(
      this.state.items,
      {[itemId]: {meta: {likesCount: { $apply: function(x) { return x ? x + 1 : 1; }}}}}
    );
    this.setState({items: newItems});
  }
  chartData() {
    return this.state.items.map(
      item => [item.text, item.meta.likesCount ? item.meta.likesCount : 0]
    );
  }
  
  fetchPosts() {
    request
      .get('http://localhost:3001/posts')
      .set({Accept: 'application/json'})
      .end((err, res) => this.setState({ items: camelizeKeys(res.body) }));
  }
  
  render() {
    const {items} = this.state;
    return (
      <Row>
        <Col md={9}>
          <BlogList
            items={items}
            likesHandler={itemId => this.incrementLikesCount(itemId)}
          />
        </Col>
        <Col md={3}>
          <Chart columns={this.chartData()}/>
        </Col>
      </Row>
    );
  }
}

export default BlogPage;