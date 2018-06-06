import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const UnstyledLink = props => <Link {...props} />

const ExternalLink = styled.a`
  background-image: none;
  color: white;
  padding: 0 0.25em;
  text-shadow: unset;

  :hover {
    color: lightblue;
    text-decoration: underline;
  }
`

const InternalLink = styled(UnstyledLink)`
  background-image: none;
  text-shadow: unset;

  :hover {
    text-decoration: underline;
  }
`

const SiteLink = ({ children, ext, href, label, text }) =>
  ext ? (
    <ExternalLink href={href} aria-label={label}>
      {children || text}
    </ExternalLink>
  ) : (
    <InternalLink to={href} aria-label={label}>
      {children || text}
    </InternalLink>
  )

export default SiteLink
