/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Title, Section } from './about';

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <Section>
        <Title>Blog</Title>
        <PostList>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <PostLink to={post.frontmatter.path}>
                <h2>{post.frontmatter.title}</h2>
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
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          frontmatter {
            path
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
