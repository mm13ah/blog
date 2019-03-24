import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileButtonDiv = styled.div`
  justify-self: end;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  color: white;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

const MobileButton = (props) => {
  const { toggleMobileMenu } = props;
  return (
    <MobileButtonDiv>
      <Button type="button" onClick={toggleMobileMenu}>
        <Icon icon={faBars} />
      </Button>
    </MobileButtonDiv>
  );
};

MobileButton.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default MobileButton;
