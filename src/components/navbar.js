import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  const { lhs, rhs } = props;

  return (
    <nav>
      <ul>
        <li><FontAwesomeIcon icon={faHome} /></li>
        {lhs.map(item => <li>{item}</li>)}
      </ul>
      <ul>
        {rhs.map(item => <li>{item}</li>)}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  lhs: PropTypes.arrayOf(PropTypes.string).isRequired,
  rhs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
