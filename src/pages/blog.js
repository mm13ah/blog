/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
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
    width: 50vw;
  }
  display: flex;
  flex-direction: column;
`;

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    border-bottom: solid 1px whitesmoke;
    padding-bottom: 23px;
  }
  .titleLink {
    ${tw`text-2xl`};
    color: whitesmoke;
    text-decoration: none;
    padding: 0;
  }
  .titleLink:hover {
    color: #3391FF;
  }
  .readMore {
    color: #3391FF;
    text-decoration: none;
  }
  .readMore:hover {
    color: #1170DD;
  }
`;

const DateSpan = styled.span`
  font-size: 1.1em;
`;

const PostExcerpt = styled.p`
  line-height: 1.5;
  font-size: 1.1em;
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
              <div>
                <h2>
                  <Link className="titleLink text-lg" to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h2>
              </div>
              <DateSpan>{new Date(post.frontmatter.date).toLocaleDateString('en-UK', { day: '2-digit', month: 'long', year: 'numeric' })}</DateSpan>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <Link className="readMore" to={post.frontmatter.path}>READ MORE</Link>
            </li>
          ))}
        </PostList>
      </Section>
    </Layout>
  );
};

// eslint-disable-next-line max-len
/* <img src={post.frontmatter.image.publicURL} alt={post.frontmatter.title} style={{ maxWidth: '100%' }} /> */
export const pageQuery = graphql`
  query blogIndex {
    allMarkdownRemark(filter: {frontmatter: {indexPage: {eq: true}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 290)
          frontmatter {
            title
            path
            date
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
