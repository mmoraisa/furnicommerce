import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from '../Nav';
import { LogoHeader, StyledHeader } from './styles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};


const Header = () => (
  <StyledHeader>
    <div className="bar">
      <LogoHeader>
        <a href="">Furnicommerce</a>
      </LogoHeader>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>
      Cart
    </div>
  </StyledHeader>
);

export default Header;
