import React, {PropTypes} from 'react'
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import Link from 'components/elements/Link';

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
        <Link to='/'>React-Bootstrap-Blog</Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

const Footer = () => (
  <div>Powered by React Course</div>
);