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
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs"
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
        "name": "blog",
        "path": "./src/blog/"
      },
      __key: "blog"
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