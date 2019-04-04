import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faJs, faHtml5, faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import homeImg from '../images/home/home.png';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Section = styled.section`
  width: 80vw;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeImageDiv = styled.div`
  max-width: 80%;
  img {
    border-radius: 100%;
    text-align: center;
    max-width: 100%;
    height: auto;
  }
  @media screen and (min-width: 480px) {
    width: 60%;
  }
  @media screen and (min-width: 640px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 992px) {
    width: 25%;
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

const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 26px;
  letter-spacing: 1px;
  @media screen and (min-width: 992px) {
    margin-top: 30px;
  }
`;

const Subtitle = styled.p`
  margin-top: 0;
  font-size: 18px;
  letter-spacing: 3px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['blog', 'javascript', 'react', 'gatsby']} />
    <Section>
      <HomeImageDiv>
        <img src={homeImg} alt="Me" />
      </HomeImageDiv>
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

export default IndexPage;
