// Navtive
const { resolve } = require('path')

// Package
const { createFilePath } = require('gatsby-source-filesystem')
const {
  createLinkedPages,
  createPaginationPages
} = require('gatsby-pagination')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((_resolve, reject) => {
    _resolve(
      graphql(`
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
          reject(result.errors)
        }

        const PAGE_LIMIT = 5
        const posts = result.data.allMarkdownRemark.edges

        // Create blog page(s) with pagination.
        createPaginationPages({
          createPage,
          edges: posts,
          limit: PAGE_LIMIT,
          component: resolve('src/templates/index.js'),
          pathFormatter: path => `/posts/${path}`
        })

        // Create individual posts with pagination.
        createLinkedPages({
          createPage,
          edges: posts,
          component: resolve('src/templates/post.js'),
          edgeParser: edge => ({
            path: `${edge.node.fields.slug}`,
            context: {
              slug: edge.node.fields.slug
            }
          })
        })
      })
    )
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
