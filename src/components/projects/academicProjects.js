import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ProjectDiv = styled.div`
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

const AcademicProjects = (props) => {
  const { img, name } = props;
  return (
    <ProjectDiv>
      <h3>{name}</h3>
      <Link to={`/projects/${name.replace(/\s/g, '').toLowerCase()}`}>
        <img src={img} alt={name} />
      </Link>
    </ProjectDiv>
  );
};

AcademicProjects.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AcademicProjects;
