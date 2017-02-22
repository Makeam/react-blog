import React from 'react';
import BlogList from '../ui/BlogList';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import {items} from '../../constants/items';


class BlogPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {items};
    }
    render(){
        const {items} = this.state;
        return(
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
                            <BlogList items={items}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )

        // return React.createElement(BlogList, {items})
    }
}

export default BlogPage;