/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from '../components/layout';
import { Title } from '../pages/about';

const Article = styled.article`
  width: 80vw;
  margin: auto;
`;

const Template = ({ data: { mdx } }) => {
  const { title } = mdx.frontmatter;
  return (
    <Layout>
      <Article>
        <Title>{title}</Title>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Article>
    </Layout>
  );
};

Template.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;

export default Template;
