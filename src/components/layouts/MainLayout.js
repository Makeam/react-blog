import React from 'react';
import { Navbar, Grid, Button } from 'react-bootstrap';
import Link from 'components/elements/Link';
import history from 'helpers/history';

const MainLayout = ({children}) => (
  <div>
    <MenuNav/>
    <Grid>
      <GoBackBtn/>
      {children}
    </Grid>
    <Footer/>
  </div>
);

export default MainLayout;

const GoBackBtn = () => (
  <Button onClick={() => history.goBack()} >Назад</Button>
);

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