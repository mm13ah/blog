import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faJs, faHtml5, faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import homeImg from '../images/alex.jpeg';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Section = styled.section`
  width: 80vw;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 992px) {
    margin-top: 80px;
  }
`;

const HomeImage = styled.img`
  border-radius: 100%;
  text-align: center;
  max-width: 200%;
  height: auto;
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['blog', 'javascript', 'react', 'gatsby']} />
    <Section>
      <div>
        <HomeImage src={homeImg} alt="Me" />
      </div>
      <h1 style={{ marginTop: '30px', marginBottom: '10px', fontSize: '26px' }}>Hi, I&apos;m Alex.</h1>
      <p style={{ marginTop: '0', fontSize: '18px' }}>A web developer.</p>
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
