// Create tag pages
exports.createPages = async ({actions, graphql}) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve(`./src/templates/tags-page-template.js`);

  const result = await graphql(`
    query Posts {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `);
  
  const posts = result.data.allMdx.nodes;
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