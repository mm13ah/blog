/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faJs, faHtml5, faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Section = styled.section`
  width: 80vw;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeImageDiv = styled.div`
  width: 70%;
  margin: 20px auto 0 auto;
  img {
    border-radius: 100%;
    text-align: center;
  }
  @media screen and (min-width: 480px) {
    width: 50%;
  }
  @media screen and (min-width: 640px) {
    width: 40%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-top: 40px;
  }
  @media screen and (min-width: 992px) {
    width: 20%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 26px;
  letter-spacing: 1px;
  animation: fadein 1s;
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @media screen and (min-width: 992px) {
    margin-top: 30px;
  }
`;

const Subtitle = styled.p`
  margin-top: 0;
  font-size: 18px;
  letter-spacing: 3px;
  animation: fadein 3s;
  text-align: center;
  @keyframes fadein {
    0% { opacity: 0; }
    33% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const IconList = styled.ul`
  width: 90vw;
  font-size: 40px;
  list-style-type: none;
  padding: 0;
  margin: 10px 0 100px 0;
  display: flex;
  justify-content: space-around;
  animation: fadein 3s;
  @keyframes fadein {
    0% { opacity: 0; }
    33% { opacity: 0; }
    100% { opacity: 1; }
  }
  @media screen and (min-width: 480px) {
    width: 60vw;
  }
  @media screen and (min-width: 640px) {
    width: 50vw;
  }
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
  @media screen and (min-width: 992px) {
    width: 25vw;
  }
`;

const IndexPage = ({ data }) => (
  <Layout particles onHover="grab">
    <SEO title="Home" keywords={['blog', 'javascript', 'react', 'gatsby']} />
    <HomeImageDiv>
      <Img fluid={data.homeImg.childImageSharp.fluid} alt="Me" />
    </HomeImageDiv>
    <Section>
      <Title>Hi, I&apos;m Alex.</Title>
      <Subtitle>A web developer.</Subtitle>
      <IconList>
        <li><FontAwesomeIcon icon={faReact} /></li>
        <li><FontAwesomeIcon icon={faJs} /></li>
        <li><FontAwesomeIcon icon={faHtml5} /></li>
        <li><FontAwesomeIcon icon={faCss3Alt} /></li>
      </IconList>
    </Section>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    homeImg: file(relativePath: { eq: "home/home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
