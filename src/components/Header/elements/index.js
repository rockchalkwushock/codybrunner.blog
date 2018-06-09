import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.45rem;
`

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  margin: 0;
`

export { StyledHeader, StyledTitle }
