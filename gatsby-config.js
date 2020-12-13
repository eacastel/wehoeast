require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: `https://wehoeast.org`,
    title: "West Hollywood Eastside Neighborhood Watch Group",
    description:
      "West Hollywood Eastside Neighborhood Watch Group works to make East West Hollywood safer by working together with the City of West Hollywood and the West Hollywood Sherif's Department to reduce crime and improve the quality of life of our neighborhood.",
    image: "src/images/wehoeastside-logo-compact.png",
  },
  pathPrefix: "/wehoeast",
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://wehoeast.org',
        sitemap: 'https://wehoeast.org/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT, 
          timeout: 3500
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      },
    },
  ],
};
