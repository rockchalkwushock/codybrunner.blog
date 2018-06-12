import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const UnstyledLink = props => <Link {...props} />

const ExternalLink = styled.a`
  background-image: ${({ theme }) => theme.reset};
  color: ${({ theme }) => theme.primary};
  padding: 0 0.25rem;
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    color: ${({ theme }) => theme.hover};
    text-decoration: ${({ theme }) => theme.tDecoration};
  }
`

const InternalLink = styled(UnstyledLink)`
  background-image: ${({ theme }) => theme.reset};
  color: ${({ theme }) => theme.secondary};
  text-shadow: ${({ theme }) => theme.reset};

  :hover {
    text-decoration: ${({ theme }) => theme.tDecoration};
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

export { InternalLink }
export default SiteLink
