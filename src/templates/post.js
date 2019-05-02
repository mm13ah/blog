/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import Helmet from 'react-helmet';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const Article = styled.article`
  width: 80vw;
  margin: auto;
  line-height: 1.6;
  h1 {
    ${tw`text-3xl text-center`};
  }
  @media screen and (min-width: 992px) {
    width: 60vw;
  }
  /* img {
    max-width: 50%;
    margin: auto;
  } */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Post = styled.div`
  margin-top: 40px;
  a {
    color: whitesmoke;
  }
  h2 {
    ${tw`text-3xl`};
  }
  h3 {
    ${tw`text-2xl`};
  }
  h4 {
    ${tw`text-xl`};
  }
  p, ul, li {
    ${tw`text-lg leading-normal`};
  }
`;

const PageLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  .link {
    color: whitesmoke;
    text-decoration: none;
    ${tw`text-2xl`}
    /* vertical-align: center; */
  }

`;

const PostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const {
    title, prev, next, index,
  } = frontmatter;
  const prevPage = prev ? prev.replace(/-/g, ' ').replace(/\//g, '') : '';
  const nextPage = next ? next.replace(/-/g, ' ').replace(/\//g, '') : '';
  return (
    <Layout>
      <Article>
        <h1>{title}</h1>
        {/* <img src={image.publicURL} alt={title} /> */}
        {/* eslint-disable-next-line react/no-danger */}
        <Post dangerouslySetInnerHTML={{ __html: html }} />
        <PageLinks>
          {prev
            ? (
              <Link className="link" to={`${index}${prev}`}>
                <FontAwesomeIcon className="icon" icon={faArrowLeft} style={{ marginRight: '10px' }} />
                <span>Previous</span>
                <div style={{ fontSize: '1rem', textAlign: 'center' }}>{prev === '/' ? 'Introduction' : prevPage.charAt(0).toUpperCase() + prevPage.slice(1)}</div>
              </Link>
            ) : (
              <span />)
            }
          {next
            ? (
              <Link className="link" to={`${index}${next}`}>
                <span>Next</span>
                <FontAwesomeIcon className="icon" icon={faArrowRight} style={{ marginLeft: '10px' }} />
                <div style={{ fontSize: '1rem', textAlign: 'center' }}>{nextPage.charAt(0).toUpperCase() + nextPage.slice(1)}</div>
              </Link>
            ) : (
              <span />)
            }
        </PageLinks>
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
        index
        prev
        next
      }
    }
  }
`;

export default PostTemplate;
