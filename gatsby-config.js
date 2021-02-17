module.exports = {
  siteMetadata: {
    title: `Aaron Conway`,
    description: `RBC Chair in Cardiovascular Nursing Research`,
    author: `@aw_conway`,
    url: "https://pmcc-updates.netlify.app",
    image: "/images/aaronconway.png",
    twitterUsername: "@aw_conway",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `reports`,
        path: `${__dirname}/src/reports/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/reports`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [ 
          `gatsby-remark-copy-linked-files`
        ],
        defaultLayouts: {
          default: require.resolve("./src/components/layoutReports.js"),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Conway | Nurse Researcher`,
        short_name: `awconway`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
