/* eslint-disable no-undef, react/no-danger */
import React from 'react'

import { Card, Pagination } from '../components'

export default function Template({ pathContext }) {
  const { nodes } = pathContext
  return (
    <div>
      <Pagination {...pathContext} />
      {nodes.map(({ node: post }) => (
        <Card
          key={post.fields.slug}
          link={post.fields.slug}
          time={post.timeToRead}
          {...post.frontmatter}
        />
      ))}
      <Pagination {...pathContext} />
    </div>
  )
}
