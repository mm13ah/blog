import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import aboutImg from '../images/about/about.jpg';
import cv from '../images/about/cv.png';

export const Section = styled.section`
  width: 80vw;
  margin: auto;
  @media screen and (min-width: 768px) {
  width: 60vw;
  }
  @media screen and (min-width: 992px) {
    width: 50vw;
  }
  @media screen and (min-width: 1200px) {
    width: 35vw;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const AboutImageDiv = styled.div`
  width: 80vw;
  @media screen and (min-width: 768px) {
  width: 60vw;
  }
  @media screen and (min-width: 992px) {
    width: 50vw;
  }
  @media screen and (min-width: 1200px) {
    width: 35vw;
  }
  img {
    max-width: 100%;
  }
`;

const AboutText = styled.p`
  font-size: 1.3em;
  text-align: justify;
  line-height: 2;
  width: 80vw;
  @media screen and (min-width: 768px) {
  width: 60vw;
  }
  @media screen and (min-width: 992px) {
    width: 50vw;
  }
`;

const ImageContainer = styled.div`
  width: 80vw;
  @media screen and (min-width: 768px) {
  width: 60vw;
  }
  @media screen and (min-width: 992px) {
    width: 50vw;
  }
  img {
    max-width: 100%;
    margin: 50px auto;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['blog', 'javascript', 'react', 'gatsby']} />
    <Section>
      <Title>About</Title>
      <AboutImageDiv>
        <img src={aboutImg} alt="Me in Marseille" />
      </AboutImageDiv>
      <AboutText>
        Hi, I&apos;m Alex. I&apos;m a web developer and a recent Computer Science graduate.
        I currently work as a maths content creator, writing A-Level maths questions in
        JavaScript/TypeScript, at AITutor. I also do freelance
        web development on the side.
      </AboutText>
      <AboutText>
        I love working with JavaScript and all the brilliant open source technologies
        that come with it. The current technologies I use are React, Gatsby, GraphQL,
        TypeScript and NodeJS. I have a solid foundation in writing semantic HTML, styling
        and creating responsive layouts with CSS, and also previous experience using Bootstrap
        and jQuery.
      </AboutText>
      <AboutText>
          Aside from programming, I run the events&apos; brand &apos;Hot Sauce&apos;, a monthly
          funk and disco night based in Leeds. I also enjoy DJing, playing guitar and bass, and
          I&apos;m currently trying to learn French avec l&apos;aide de ma petite amie.
      </AboutText>
      <AboutText>
        If you&apos;d like to know more about my technical experience or want to see examples of
        my work, check out my projects. If you&apos;d like to know more about me, have a look at
        my CV below. Otherwise, feel free to contact me.
      </AboutText>
      <ImageContainer>
        <img src={cv} alt="My CV" />
      </ImageContainer>
    </Section>
  </Layout>
);

export default AboutPage;
