module.exports = {
  siteMetadata: {
    title: `J. Simon Richard`,
    siteUrl: `https://jsimonrichard.com`
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/post-template.js")
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers"
        ],
        remarkPlugins: [require('remark-math'), require('remark-html-katex')]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "skills",
        "path": "./src/images/skills/"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};