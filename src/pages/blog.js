/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Title } from './about';

const Section = styled.section`
  width: 40vw;
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

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <Section>
        <Title>Blog</Title>
        <PostList>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <PostLink to={post.frontmatter.path}>
                <h2 style={{ textAlign: 'center' }}>{post.frontmatter.title}</h2>
                <img src={post.frontmatter.image.publicURL} alt={post.frontmatter.title} style={{ maxWidth: '100%' }} />
              </PostLink>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </PostList>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`;
export default BlogPage;

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
};
