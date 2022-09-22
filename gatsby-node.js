const _ = require('lodash');
const path = require('path');


// Create extra content
exports.createPages = async ({actions, graphql}) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/templates/post-template.js');
  const tagTemplate = path.resolve(`./src/templates/tags-page-template.js`);

  const result = await graphql(`
    query Posts {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          slug
          fileAbsolutePath
          frontmatter {
            tags
          }
        }
      },
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
  posts.forEach(node => {
    console.log("Creating page for", node)
    createPage({
      path: "/blog/"+node.slug,
      component: postTemplate,//+"?__contentFilePath="+node.fileAbsolutePath,
      context: {
        slug: node.slug
      }
    })
  })

  // Create tag pages
  let tags = [];
  posts.forEach(post => {
    tags = tags.concat(post.frontmatter.tags);
  });
  _.uniq(tags).forEach(tag => {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: { tag }
    });
  });
};