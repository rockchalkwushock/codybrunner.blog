import styled from 'styled-components'

const Container = styled.div`
  align-items: ${({ align }) => align};
  display: flex;
  flex-direction: ${({ dir }) => dir};
  justify-content: ${({ justify }) => justify};
  padding: ${({ pad }) => pad};
`

Container.defaultProps = {
  align: 'center',
  dir: 'column',
  justify: 'center',
  pad: '0.5rem'
}

export default Container
