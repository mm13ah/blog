import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { Title } from '../about';
import AcademicProjects from '../../components/projects/academicProjects';
import visualCryptography from '../../images/projects/visual-cryptography.png';
import matrixSolvers from '../../images/projects/matrix-solvers.png';

export const Section = styled.section`
  width: 50vw;
  margin: 0 auto 50px auto;
  @media screen and (min-width: 768px) {
    width: 60vw;
  }
  @media screen and (min-width: 992px) {
    width: 50vw;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const AcademicProjectsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 70px;
  }
`;

const ProjectsPage = () => (
  <Layout>
    <Section>
      <Title>Projects</Title>
      <h2>Academic Projects</h2>
      <AcademicProjectsDiv>
        <AcademicProjects name="Matrix Solvers" img={matrixSolvers} />
        <AcademicProjects name="Visual Cryptography" img={visualCryptography} />
      </AcademicProjectsDiv>
    </Section>
  </Layout>
);

export default ProjectsPage;
