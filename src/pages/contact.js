import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { Title } from './about';
// import contactImg from '../images/contact.jpg';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const ImageContainer = styled.div`
//   width: 20vw;
//   margin: auto;
//   img {
//     max-width: 100%;
//   }
// `;

const Form = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  input, textarea {
    background-color: #333;
    color: white;
    margin-bottom: 10px;
    font-size: 16px;
    padding: 5px;
    border-width: 2px;
  }
`;

const Label = styled.label`
  @media screen {
    display: none;
  }
`;

const Textarea = styled.textarea`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
`;

const ContactPage = () => (
  <Layout>
    <SEO title="About" keywords={['blog', 'javascript', 'react', 'gatsby']} />
    <Section>
      <Title>Contact</Title>
      {/* <ImageContainer>
        <img src={contactImg} alt="Me" />
      </ImageContainer> */}
      <p>
        If you have any questions, or just fancy a chat, feel free to get in
        contact with me below.
      </p>
      <Form>
        <Label htmlFor="name">Name:</Label>
        <input id="name" type="text" placeholder="Name" />
        <Label htmlFor="email">Email:</Label>
        <input id="email" type="email" placeholder="Email" />
        <Label htmlFor="message">Message:</Label>
        <Textarea id="message" type="text" placeholder="Message" rows="10" />
        <input type="submit" value="Submit" />
      </Form>
    </Section>
  </Layout>
);

export default ContactPage;
