module.exports = {
  siteMetadata: {
    title: 'Alex Harvey',
    description: 'Alex Harvey\'s Portfolio and Blog',
    author: '@mm13ah',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'blog',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/images/shared/favicon.png',
      },
    },
    'gatsby-remark-copy-linked-files',
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 1080,
      },
    },
    'gatsby-plugin-styled-components',
  ],
};
