import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Title } from '../about';
// import AcademicProjects from '../../components/projects/academicProjects';

export const Section = styled.section`
  width: 80vw;
  margin: 0 auto 50px auto;
  @media screen and (min-width: 768px) {
    width: 60vw;
  }
  @media screen and (min-width: 992px) {
    width: 50vw;
  }
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const WebDevProjectsDiv = styled.div`
  margin-bottom: 80px;
  .webImg {
    border: solid 1px white;
    width: 100%;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    .webImg {
      width: 80%;
    }
  }
`;

const AcademicProjectsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 30px;
  .academicImg {
    width: 80%;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 70px;
    .academicImg {
      width: 100%;
    }
  }
`;

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" keywords={['blog', 'javascript', 'react', 'gatsby']} />
    <Section>
      <Title>Projects</Title>
      <h2>Web Development Projects</h2>
      <WebDevProjectsDiv>
        <a href="https://riddimrecords.co.uk" target="_blank" rel="noreferrer noopener">
          <Img className="webImg" fluid={data.riddimImg.childImageSharp.fluid} alt="Riddim Records Website" />
        </a>
      </WebDevProjectsDiv>
      <h2>Academic Projects</h2>
      <AcademicProjectsDiv>
        <a href="https://github.com/mm13ah/matrix-solvers" target="_blank" rel="noreferrer noopener">
          <Img className="academicImg" fluid={data.matrixImg.childImageSharp.fluid} alt="Matrix Solvers Report" />
        </a>
        <a href="https://github.com/mm13ah/visual-cryptography" target="_blank" rel="noreferrer noopener">
          <Img className="academicImg" fluid={data.visualImg.childImageSharp.fluid} alt="Visual Cryptography Report" />
        </a>
        {/* <AcademicProjects name="Matrix Solvers" img={matrixSolvers} />
        <AcademicProjects name="Visual Cryptography" img={visualCryptography} /> */}
      </AcademicProjectsDiv>
    </Section>
  </Layout>
);

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ProjectsPage;

export const query = graphql`
  query {
    matrixImg: file(relativePath: { eq: "projects/matrix-solvers.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    visualImg: file(relativePath: { eq: "projects/visual-cryptography.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    riddimImg: file(relativePath: { eq: "projects/riddim.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
