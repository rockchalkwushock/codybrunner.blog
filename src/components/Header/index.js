import React from 'react'

import { Container, Link } from '../commons'
import { StyledHeader, StyledTitle } from './elements'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container pad="1.45rem 1.0875rem">
      <StyledTitle>
        <Link href="/" label="home">
          {siteTitle}
        </Link>
      </StyledTitle>
    </Container>
  </StyledHeader>
)

export default Header
