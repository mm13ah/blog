import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import './layout.css';

const navlist = ['About', 'Projects', 'Contact'];

const Layout = ({ children }) => (
  <div>
    <Navbar navlist={navlist} />
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
