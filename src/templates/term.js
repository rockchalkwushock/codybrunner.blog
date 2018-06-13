import React from 'react'

import { Term } from '../components'

export default function Template({ pathContext }) {
  return (
    <div>
      <Term {...pathContext} />
    </div>
  )
}
