/* eslint-disable no-undef, react/no-danger */
import React from 'react'
import Helmet from 'react-helmet'

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`codybrunner.blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <h2>{post.frontmatter.description}</h2>
        <h2>{post.frontmatter.tags}</h2>
        <h2>
          {post.timeToRead} • {post.wordCount.words}
        </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
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
