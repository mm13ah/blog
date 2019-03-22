import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Menu = styled.ul`
  display: ${props => (props.visibility ? 'block' : 'none')};
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    padding-top: 10px;
    text-align: center;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const MobileMenu = (props) => {
  const { visibility, list } = props;
  return (
    <Menu visibility={visibility}>
      {list.map(item => <li>{item}</li>)}
    </Menu>
  );
};

MobileMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibility: PropTypes.bool.isRequired,
};

export default MobileMenu;
