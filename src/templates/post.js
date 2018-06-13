/* eslint-disable no-undef, react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'

import { Post } from '../components'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <Helmet title={`codybrunner.blog - ${post.frontmatter.title}`} />
      <Post post={post} />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`
