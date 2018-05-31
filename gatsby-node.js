// Navtive
const { resolve } = require('path')

// Package
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              description
              draft
              keywords
              tags
              title
            }
            html
            timeToRead
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        component: resolve(`src/templates/post.js`),
        context: {
          slug: node.fields.slug
        },
        path: node.fields.slug
      })
    })
  })
}

// Adds `slug` key/value to each node.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
