/* eslint-disable no-undef */
import React from 'react'

import { Card } from '../components'

// ! Refactor with template & pass most recent 'posts' on as pathContext.

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      {posts.map(({ node: post }) => (
        <Card
          key={post.fields.slug}
          link={post.fields.slug}
          time={post.timeToRead}
          {...post.frontmatter}
        />
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
          timeToRead
        }
      }
    }
  }
`
