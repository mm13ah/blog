import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import './layout.css';

const lhs = ['Blog'];
const rhs = ['About', 'Projects', 'Contact'];

const Layout = ({ children }) => (
  <div>
    <Navbar lhs={lhs} rhs={rhs} />
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
