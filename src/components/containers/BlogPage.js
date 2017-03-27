import React from 'react';
import BlogList from '../ui/BlogList';
import Chart from '../ui/Chart';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import {items} from '../../constants/items';
import _ from 'lodash';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items};
  }
  incrementLikesCount(itemId) {
    console.log(itemId);
    let newItems = this.state.items;
    let item = _.find(newItems, (i) => i.id === itemId);
    if (item.meta.likesCount) {
      item.meta.likesCount += 1;
    } else {
      item.meta.likesCount = 1;
    }
    this.setState({items: newItems});
  }
  chartData() {
    return this.state.items.map(item => [item.text, item.meta.likesCount ? item.meta.likesCount : 0]);
  }
  render() {
    const {items} = this.state;
    return (
      <div>
          <Navbar inverse staticTop>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#">React-Bootstrap-Blog</a>
                  </Navbar.Brand>
              </Navbar.Header>
          </Navbar>
          <Grid>
              <Row>
                  <Col md={12}>
                      <BlogList
                        items={items}
                        likesHandler={itemId => this.incrementLikesCount(itemId)}
                      />
                  </Col>
                  <Col md={12}>
                    <Chart columns={this.chartData()}/>
                  </Col>
                
              </Row>
          </Grid>
      </div>
    );
    
  }
}

export default BlogPage;