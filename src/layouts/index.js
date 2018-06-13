/* eslint-disable no-undef */
import React from 'react'
import { ThemeProvider } from 'styled-components'

// PrismJS theme for markdown files
import 'prismjs/themes/prism.css'

import { Footer, Header, Seo, Wrapper } from '../components'
import { theme } from '../utils/theme'

const Layout = ({ children, data }) => {
  const { buildTime, siteMetadata: site } = data.site
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Seo site={site} />
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
    </ThemeProvider>
  )
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      buildTime(formatString: "DD MMM YYYY")
      siteMetadata {
        author
        copyright
        description
        icons {
          className
          href
          label
        }
        keywords
        lang
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
        twitter
      }
    }
  }
`
