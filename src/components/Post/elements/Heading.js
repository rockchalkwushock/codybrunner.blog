import React from 'react'
import styled from 'styled-components'

import { Container } from '../../commons'

const StyledTitle = styled.h1`
  margin-bottom: 0.5rem;
  margin-top: ${({ theme }) => theme.reset};
  text-align: center;
`

const StyledInfo = styled.h4`
  margin-bottom: 0.5rem;
`

const Heading = ({ date, time, title }) => (
  <Container pad="0">
    <StyledTitle>{title}</StyledTitle>
    <StyledInfo>
      {date} • {time} minutes
    </StyledInfo>
  </Container>
)

export default Heading
