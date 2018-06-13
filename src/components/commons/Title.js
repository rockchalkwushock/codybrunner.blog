import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ head, theme }) => (head ? theme.primary : theme.secondary)};
  margin-bottom: ${({ head }) => (head ? '0' : '0.5rem')};
  margin-top: ${({ head, theme }) => (head ? '0' : theme.reset)};
  text-align: center;
`

export default Title
