import React from 'react'
import Helmet from 'react-helmet'

import { Footer, Header, Wrapper } from '../components'
import './index.css'

const Layout = ({ children, data }) => {
  const { buildTime, siteMetadata: site } = data.site
  return (
    <div>
      <Helmet title={site.title} />
      <Header siteTitle={site.title} />
      <Wrapper>{children()}</Wrapper>
      <Footer
        buildTime={buildTime}
        copyright={site.copyright}
        icons={site.icons}
        links={site.links}
        siteUrl={site.siteUrl}
      />
    </div>
  )
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      buildTime(formatString: "DD MMM YYYY")
      siteMetadata {
        copyright
        icons {
          className
          href
          label
        }
        links {
          creativeCommons {
            href
            text
          }
          gatsby {
            href
            text
          }
          now {
            href
            text
          }
          src {
            href
          }
          styled {
            href
            text
          }
        }
        siteUrl
        title
      }
    }
  }
`
