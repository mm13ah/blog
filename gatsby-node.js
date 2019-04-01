// in gatsby-node.js
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          // console.error(result.errors);
          reject(result.errors);
        }
        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.frontmatter.path,
            // This component will wrap our MDX content
            component: path.resolve('./src/templates/post.js'),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id },
          });
        });
      }),
    );
  });
};
