/* eslint-disable no-undef, react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'

import { Post } from '../components'

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
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
      wordCount {
        words
      }
    }
  }
`
