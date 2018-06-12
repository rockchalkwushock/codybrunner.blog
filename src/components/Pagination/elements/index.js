import React from 'react'
import styled from 'styled-components'

import { InternalLink } from '../../commons/Link'

const PaginationLink = props =>
  props.href && props.text ? (
    <InternalLink to={props.href} aria-label={props.label}>
      {props.children || props.text}
    </InternalLink>
  ) : null

const StyledPages = styled.div`
  text-align: center;
  width: 50%;
`

export { PaginationLink, StyledPages }
