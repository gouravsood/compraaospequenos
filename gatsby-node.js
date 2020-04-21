/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges
    .forEach(({ node }) => {
      // const pathName = node.fields.slug;
      // @todo add better error support if template is not found, or use default template
      // const component = path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.jsx`);
      // const { id } = node;
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.jsx`),
        // additional data can be passed via context
        context: {
          id: node.id,
        },
      });
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });

    // Create slug for this content entry
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
