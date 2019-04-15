/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectDiv = styled.div`
  width: 80vw;
  margin: 60px auto 60px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 8fr;
  grid-template-areas: 'image title'
                       'image info';
  justify-items: center;
  .title { 
    grid-area: title;
    text-align: center;
  }
  .image {
    max-width: 80%;
    grid-area: image;
    img {
      max-width: 100%;
    }
  }
  .info {
    grid-area: info;
    line-height: 1.7;
  }
`;

const IconList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-content: center;
  padding: 0;
  margin: 0;
  font-size: 25px;
  li, li i {
    margin: 0 10px;
  }
`;

const TechList = styled.ul`
  margin: 0;
`;

const AcademicProject = (props) => {
  const {
    img, name, info, iconList, cplusplus, techList, github,
  } = props;
  return (
    <ProjectDiv>
      <a className="image" href={github} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={name} />
      </a>
      <h2 className="title">{name}</h2>
      <div className="info">
        <IconList className="iconList">
          {cplusplus && <li style={{ marginTop: '3px' }}><i className="devicon-cplusplus-plain" /></li>}
          {iconList.map((icon, index) => (<li key={index}><FontAwesomeIcon icon={icon} /></li>))}
        </IconList>
        <div className="infoText">
          {info.map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
        </div>
        <h3 style={{ textAlign: 'center', padding: '0' }}>Technologies used</h3>
        <TechList className="techList">
          {techList.map((tech, index) => (<li key={index}>{tech}</li>))}
        </TechList>
      </div>
    </ProjectDiv>
  );
};

AcademicProject.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconList: PropTypes.arrayOf(PropTypes.string).isRequired,
  cplusplus: PropTypes.bool.isRequired,
  techList: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
};

export default AcademicProject;
