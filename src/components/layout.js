import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Navbar from './navbar';
import './layout.css';

const ParticleStyles = styled(Particles)`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const particleParams = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 2,
    },
    opacity: {
      value: 0.3,
    },
    move: {
      out_mode: 'bounce',
      speed: 8,
    },
    line_linked: {
      color: '#FFF',
      shadow: { enable: false },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const Layout = ({ children, particles }) => (
  <div>
    {particles && (<ParticleStyles params={particleParams} />)}
    <Navbar lhs={['Blog']} rhs={['About', 'Projects', 'Contact']} />
    <main>
      { children }
    </main>
  </div>
);

Layout.defaultProps = {
  particles: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  particles: PropTypes.bool,
};

export default Layout;
