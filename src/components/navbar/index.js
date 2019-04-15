import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import MobileButton, { Icon } from './mobileButton';
import MobileMenu, { NavLink } from './mobileMenu';

const Nav = styled.nav`
  width: 80vw;
  margin: auto;
  padding: 2rem 0;
  letter-spacing: 1.5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (min-width: 992px) {
    width: 90vw;
  }
`;

const LHS = styled.ul`
  justify-self: start;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .desktopLink {
    display: none;
  }
  @media screen and (min-width: 992px) {
    justify-self: auto;
    .desktopLink {
      display: block;
    }
  }
`;

const RHS = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMobileMenu: false };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    const { showMobileMenu } = this.state;
    this.setState({ showMobileMenu: !showMobileMenu });
  }

  render() {
    const { lhs, rhs } = this.props;
    const { showMobileMenu } = this.state;
    return (
      <Nav>
        <LHS>
          <li className="icon" key="home">
            <NavLink to="/">
              <Icon icon={faHome} />
            </NavLink>
          </li>
          {lhs.map(item => (
            <li className="desktopLink" key={item.toLowerCase()}>
              <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
            </li>
          ))}
          <span />
        </LHS>
        <span />
        <RHS className="rhsList">
          {rhs.map(item => <li key={item.toLowerCase()}><NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink></li>)}
        </RHS>
        <MobileButton toggleMobileMenu={this.toggleMobileMenu} />
        <span />
        <MobileMenu visibility={showMobileMenu} list={[...lhs, ...rhs]} />
      </Nav>
    );
  }
}

Navbar.propTypes = {
  lhs: PropTypes.arrayOf(PropTypes.string).isRequired,
  rhs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
