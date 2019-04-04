/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Title } from '../pages/about';

const Article = styled.article`
  width: 70vw;
  margin: auto;
  line-height: 150%;
`;

const Post = styled.div`
  margin-top: 70px;
  a {
    color: white;
  }
`;

const PostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Article>
        <Title>{post.frontmatter.title}</Title>
        {/* eslint-disable-next-line react/no-danger */}
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;

export default PostTemplate;
