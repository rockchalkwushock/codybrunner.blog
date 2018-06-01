import React from 'react'

import { Container } from '../commons'
import { StyledHeader, StyledTitle } from './elements'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container pad="1.45rem 1.0875rem">
      <StyledTitle>{siteTitle}</StyledTitle>
    </Container>
  </StyledHeader>
)

export default Header
