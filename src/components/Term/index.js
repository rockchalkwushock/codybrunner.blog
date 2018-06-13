import React from 'react'

import Card from '../Card'

const Term = ({ tag, taggedPosts }) => (
  <div>
    <h1>
      {taggedPosts.length} post{taggedPosts.length === 1 ? '' : 's'} tagged with{' '}
      {tag}
    </h1>
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
