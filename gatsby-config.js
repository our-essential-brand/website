const config = require('./settings.json');
const url = require('url');

const siteUrl = url.parse(config.siteUrl);

module.exports = {
  siteMetadata: {
    title: config.title,
    author: config.author,
    description: config.description,
    siteUrl: config.siteUrl,
  },
  pathPrefix: siteUrl ? siteUrl.pathname : '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'content',
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
