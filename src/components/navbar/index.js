import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import MobileButton from './mobileButton';
import MobileMenu from './mobileMenu';

const Nav = styled.nav`
  width: 80vw;
  margin: auto;
  padding-top: 20px;
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
  .link {
    color: white;
  }
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
          <li className="icon">
            <Link to="/" className="link">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          {lhs.map(item => <li className="desktopLink">{item}</li>)}
          <span />
        </LHS>
        <span />
        <RHS className="rhsList">
          {rhs.map(item => <li>{item}</li>)}
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
