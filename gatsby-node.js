const _ = require("lodash");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

// Update blog slugs
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === "Mdx") {
    // Get relative path for files on disk
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "blog/",
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `blog${relativeFilePath}`,
    });
  }
};

// Create extra content
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/templates/post-template.jsx");
  const tagTemplate = path.resolve(`./src/templates/tags-page-template.jsx`);

  const result = await graphql(`
    query Posts {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          fields {
            slug
          }
          fileAbsolutePath
          frontmatter {
            tags
          }
        }
      }
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.nodes;

  // Create posts
  posts.forEach((node) => {
    console.log("Creating page for", node);
    createPage({
      path: node.fields.slug,
      component: postTemplate, //+"?__contentFilePath="+node.fileAbsolutePath,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // Create tag pages
  let tags = [];
  posts.forEach((post) => {
    tags = tags.concat(post.frontmatter.tags);
  });
  _.uniq(tags).forEach((tag) => {
    createPage({
      path: `/blog/tags/${tag}`,
      component: tagTemplate,
      context: { tag },
    });
  });
};
