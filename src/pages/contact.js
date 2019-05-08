/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { Title } from './about';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: auto;
  width: 80vw;
`;

const Form = styled.form`
  width: 70vw;
  display: grid;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  input, textarea {
    background-color: rgb(41, 48, 61);
    color: whitesmoke;
    margin-bottom: 10px;
    padding: 5px;
    border-width: 2px;
    font-size: 16px;
  }
  textarea {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  input::placeholder, textarea::placeholder {
    color: whitesmoke;
  }
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
  @media screen and (min-width: 992px) {
    width: 30vw;
  }
`;

const Label = styled.label`
  @media screen {
    display: none;
  }
`;

const ContactPage = () => (
  <Layout particles>
    <SEO title="Contact" keywords={['blog', 'javascript', 'react', 'gatsby']} />
    <Section>
      <Title>Contact</Title>
      <p>
        If you have any questions, or just fancy a chat, feel free to get in
        contact with me below.
      </p>
      <Form name="contact" method="POST" data-netlify="true">
        <Label htmlFor="name">Name:</Label>
        <input id="name" type="text" placeholder="Name" />
        <Label htmlFor="email">Email:</Label>
        <input id="email" type="email" placeholder="Email" />
        <Label htmlFor="message">Message:</Label>
        {/* // eslint-disable-next-line react/self-closing-comp */}
        <textarea id="message" type="text" placeholder="Message" rows="8" />
        <input type="submit" value="Submit" />
      </Form>
    </Section>
  </Layout>
);

export default ContactPage;
