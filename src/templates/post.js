/* eslint-disable no-undef, react/no-danger */
import React from 'react'

import { Post, Seo } from '../components'

export default function Template({ data }) {
  const { markdownRemark: post, site } = data
  return (
    <div>
      <Seo postSeo post={post} site={site.siteMetadata} />
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
    site {
      siteMetadata {
        author
        copyright
        description
        keywords
        lang
        siteUrl
        title
        twitter
      }
    }
  }
`
