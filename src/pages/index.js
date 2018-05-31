import React from 'react'
import Link from 'gatsby-link'

// ! Refactor with template & pass most recent 'posts' on as pathContext.

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <h1> Hi people </h1> <p> Welcome to your new Gatsby site. </p>
      <p> Now go build something great. </p>
      {posts.map(({ node: post }) => (
        <Link key={post.fields.slug} to={post.fields.slug}>
          {post.frontmatter.title}
        </Link>
      ))}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
          }
        }
      }
    }
  }
`
