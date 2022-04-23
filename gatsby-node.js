const _ = require('lodash');
const path = require('path');
const fs = require("fs");

// Build to /dist folder for CI
exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    try {
      fs.rmSync(path.join(__dirname, "dist"), { recursive: true })
      fs.renameSync(
        path.join(__dirname, "public"),
        path.join(__dirname, "public_dev")
      )
    } catch (error) {
      console.warn(error);
    }
  }
}

exports.onPostBuild = () => {
  try {
    fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "dist"))
    fs.renameSync(
      path.join(__dirname, "public_dev"),
      path.join(__dirname, "public")
    )
  } catch (error) {
    console.warn(error);
  }
}


//
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