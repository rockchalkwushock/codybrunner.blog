import React from 'react'

import { Container, Title } from '../commons'
import { StyledHeader } from './elements'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container pad="1.45rem 1.0875rem">
      <Title head>{siteTitle}</Title>
    </Container>
  </StyledHeader>
)

export default Header
