import styled from 'styled-components'

import { Container } from '../../commons'

const CardContainer = Container.extend`
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  margin: ${({ theme }) => theme.card.margin};
  max-width: ${({ theme }) => theme.card.width};
`

const StyledDescription = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: ${({ theme }) => theme.card.weight};
  margin-bottom: 0;
`

const StyledInfo = styled.h5`
  font-weight: ${({ theme }) => theme.card.weight};
  margin-bottom: ${({ theme }) => theme.card.mBottom};
  margin-top: ${({ theme }) => theme.card.mTop};
`

const StyledTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.card.mBottom};
  margin-top: ${({ theme }) => theme.card.mTop};
`

export { CardContainer, StyledDescription, StyledInfo, StyledTitle }
