import React from 'react'

import { Container } from '../commons'
import { Content, Heading, Share } from './elements'

const Post = ({ post }) => (
  <Container align="unset" justify="unset">
    <Heading
      date={post.frontmatter.date}
      tags={post.frontmatter.tags}
      time={post.timeToRead}
      title={post.frontmatter.title}
    />
    <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    <Share
      title={post.frontmatter.title}
      url={`https://codybrunner.blog${post.fields.slug}`}
    />
  </Container>
)

export default Post
