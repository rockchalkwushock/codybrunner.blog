import styled from 'styled-components'

import { Container } from '../../commons'

const CardContainer = Container.extend`
  border-radius: 5px;
  box-shadow: 3px 3px 20px 2px rgba(0, 0, 0, 0.5);
  margin: 1.75em auto;
  max-width: 600px;
`

const StyledDescription = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: lighter;
  margin-bottom: 0;
`

const StyledInfo = styled.h5`
  font-weight: lighter;
  margin-bottom: 1rem;
`

const StyledTitle = styled.h2`
  margin-bottom: 0.5rem;
`

export { CardContainer, StyledDescription, StyledInfo, StyledTitle }
