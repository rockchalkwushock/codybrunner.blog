import React from 'react'

import { Container } from '../commons'
import { PaginationLink, StyledPages } from './elements'

const Pagination = ({ next, page, pages, prev }) => (
  <Container dir="row">
    <PaginationLink href={prev} label="Previous Page" text="Prev" />
    <StyledPages>
      {page} • {pages}
    </StyledPages>
    <PaginationLink href={next} label="Next Page" text="Next" />
  </Container>
)

export default Pagination
