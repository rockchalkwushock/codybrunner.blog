import styled from 'styled-components'

const Content = styled.section`
  .anchor,
  .gatsby-resp-image-link {
    background-image: none;
  }
  blockquote {
    border-left: 0.5rem solid rgba(0, 0, 0, 0.25);
    padding-left: 0.5rem;
  }
  blockquote:last-of-type {
    border-left: unset;
    text-align: center;
  }
  p:last-of-type {
    text-align: center;
  }
`

export default Content
