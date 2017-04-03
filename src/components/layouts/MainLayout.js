import React, {PropTypes} from 'react'
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

const MainLayout = ({children}) => (
  <div>
    <MenuNav/>
    <Grid>
      {children}
    </Grid>
    <Footer/>
  </div>
);

export default MainLayout;

const MenuNav = () => (
  <Navbar inverse staticTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap-Blog</a>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

const Footer = () => (
  <div>Powered by React Course</div>
);