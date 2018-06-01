import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const UnstyledLink = props => <Link {...props} />

const ExternalLink = styled.a`
  background-image: none;
  padding: 0 0.25em;

  :hover {
    text-decoration: underline;
  }
`

const InternalLink = styled(UnstyledLink)`
  background-image: none;

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
