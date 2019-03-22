import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import './layout.css';

const Layout = ({ children }) => (
  <div>
    <Navbar lhs={['Blog']} rhs={['About', 'Projects', 'Contact']} />
    <main>
      { children }
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
