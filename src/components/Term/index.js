import React from 'react'

import { Title } from '../commons'
import Card from '../Card'

const Term = ({ tag, taggedPosts }) => (
  <div>
    <Title>
      {taggedPosts.length} post{taggedPosts.length === 1 ? '' : 's'} tagged with{' '}
      {tag}
    </Title>
    {taggedPosts.map(post => (
      <Card
        key={post.fields.slug}
        link={post.fields.slug}
        time={post.timeToRead}
        {...post.frontmatter}
      />
    ))}
  </div>
)

export default Term
