import React from 'react'

import { Container } from '../commons'
import { Content, Heading } from './elements'

const Post = ({ post }) => (
  <Container align="unset" justify="unset">
    <Heading
      date={post.frontmatter.date}
      time={post.timeToRead}
      title={post.frontmatter.title}
    />
    <Content dangerouslySetInnerHTML={{ __html: post.html }} />
  </Container>
)

export default Post
