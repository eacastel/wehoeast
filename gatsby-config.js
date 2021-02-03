require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://wehoeast.org`,
    title: 'West Hollywood Eastside Neighborhood Watch Group',
    description:
      "West Hollywood Eastside Neighborhood Watch Group works to make East West Hollywood safer by working together with the City of West Hollywood and the West Hollywood Sherif's Department to reduce crime and improve the quality of life of our neighborhood.",
    image: '/src/images/wehoeastside-logo-compact.png',
  },
  pathPrefix: '/wehoeast',
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://wehoeast.org',
        sitemap: 'https://wehoeast.org/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 6500,
      },
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `West Hollywood Eastside Neighborhood Watch`,
        short_name: `Weho Eastside Neighborhood Watch`,
        description: `Stay connected with your neighborhood captains and make a difference in your neighborhood by getting involved.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: 'none',
      },
    },
  ],
};
