import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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
  li:last-child {
    padding-top: 3px;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

const MobileMenu = (props) => {
  const { visibility, list } = props;
  return (
    <Menu visibility={visibility ? 1 : 0}>
      {list.map(item => <li key={item.toLowerCase()}><NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink></li>)}
      <li key="line"><hr /></li>
    </Menu>
  );
};

MobileMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibility: PropTypes.bool.isRequired,
};

Menu.propTypes = {
  visibility: PropTypes.number.isRequired,
};

export default MobileMenu;
