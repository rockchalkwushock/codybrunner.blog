import styled from 'styled-components'

const Content = styled.section`
  .anchor,
  .gatsby-resp-image-link {
    background-image: ${({ theme }) => theme.reset};
  }
  blockquote {
    border-left: 0.5rem solid rgba(0, 0, 0, 0.25);
    padding-left: 0.5rem;
  }
  blockquote:last-of-type {
    border-left: ${({ theme }) => theme.reset};
  }
  p:last-child {
    text-align: center;
  }
  code::after {
    content: ${({ theme }) => theme.reset};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5em;
  }
  p {
    margin: 1em 0;
  }
  a {
    background-image: ${({ theme }) => theme.reset};
    color: ${({ theme }) => theme.secondary};
    text-decoration: ${({ theme }) => theme.tDecoration};
    &:hover {
      text-decoration: ${({ theme }) => theme.reset};
    }
  }
`

export default Content
