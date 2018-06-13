import React from 'react'
import styled from 'styled-components'

import { InternalLink } from '../../commons/Link'

const PaginationLink = props =>
  props.href && props.text ? (
    <InternalLink
      style={{ fontSize: '1.5rem' }}
      to={props.href}
      aria-label={props.label}
    >
      {props.children || props.text}
    </InternalLink>
  ) : null

const StyledPages = styled.div`
  font-size: 1.5rem;
  text-align: center;
  width: 50%;
`

export { PaginationLink, StyledPages }
