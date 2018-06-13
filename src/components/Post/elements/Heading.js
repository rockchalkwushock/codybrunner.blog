import React from 'react'
import styled from 'styled-components'

import { Container, Link, Title } from '../../commons'

const StyledInfo = styled.h4`
  margin-bottom: 0.5rem;
  margin-top: ${({ theme }) => theme.reset};
`

const StyledTags = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  margin: unset;
`

const Heading = ({ date, tags, time, title }) => (
  <Container pad="0">
    <Title>{title}</Title>
    <StyledInfo>
      {date} • {time} minutes
    </StyledInfo>
    <StyledTags>
      {tags.map(t => (
        <Link
          href={`/tags/${t.toLowerCase()}`}
          key={t}
          label={`posts for ${t}`}
          text={t.toLowerCase()}
        />
      ))}
    </StyledTags>
  </Container>
)

export default Heading
