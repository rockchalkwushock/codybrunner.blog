import React from 'react'

import { Container } from '../commons'
import { Content } from './elements'

const Post = ({ post }) => (
  <Container align="unset" justify="unset">
    <Container pad="0">
      <h1>{post.frontmatter.title}</h1>
      <h4>{post.frontmatter.date}</h4>
      <h4>
        {post.timeToRead} minutes • {post.wordCount.words} words
      </h4>
    </Container>
    <Content dangerouslySetInnerHTML={{ __html: post.html }} />
  </Container>
)

export default Post
