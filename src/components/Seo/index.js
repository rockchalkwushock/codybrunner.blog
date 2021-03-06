import React from 'react'
import Helmet from 'react-helmet'

import { mergeStrings } from '../../utils/mergeStrings'

const Seo = ({ post, postSeo, site }) => {
  const keywords = postSeo
    ? mergeStrings(site.keywords, post.frontmatter.keywords)
    : site.keywords
  return (
    <Helmet>
      {/* General Tags */}
      <html
        itemType={
          postSeo ? 'http://schema.org/Article' : 'http://schema.org/WebSite'
        }
        lang={site.lang}
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
      />
      <meta name="author" content={site.author} />
      <meta
        name="description"
        content={postSeo ? post.frontmatter.description : site.description}
      />
      <meta name="keywords" content={keywords} />
      {process.env.NODE_ENV === 'production' ? (
        <base target="_blank" href={site.siteUrl} />
      ) : null}
      {/* Schema.org Tags */}
      <meta
        itemProp="name"
        content={postSeo ? post.frontmatter.title : site.title}
      />
      <meta
        itemProp="description"
        content={postSeo ? post.frontmatter.description : site.description}
      />
      <meta
        itemProp="datePublished"
        content={postSeo ? post.frontmatter.date : ''}
      />
      <meta
        itemProp="dateModified"
        content={postSeo ? post.frontmatter.date : ''}
      />
      <meta itemProp="keywords" content={keywords} />
      <meta itemProp="image" content={require('../../assets/Icon.jpg')} />
      {/* OpenGraph Tags */}
      <meta
        property="og:title"
        content={postSeo ? post.frontmatter.title : site.title}
      />
      <meta
        property="og:description"
        content={postSeo ? post.frontmatter.description : site.description}
      />
      <meta property="og:image" content={require('../../assets/Icon.jpg')} />
      <meta property="og:image:alt" content="Logo for codybrunner.blog" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:width" content="400" />
      <meta
        property="og:url"
        content={postSeo ? `${site.siteUrl}${post.fields.slug}` : site.siteUrl}
      />
      <meta property="og:site_name" content={site.title} />
      <meta property="og:locale" content={`${site.lang}_US`} />
      <meta property="og:type" content={postSeo ? 'article' : 'website'} />
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.twitter} />
      <meta
        name="twitter:title"
        content={postSeo ? post.frontmatter.title : site.title}
      />
      <meta
        name="twitter:description"
        content={postSeo ? post.frontmatter.description : site.description}
      />
      <meta name="twitter:image" content={require('../../assets/Icon.jpg')} />
      <meta name="twitter:image:alt" content="Logo for codybrunner.blog" />
      <meta
        name="twitter:url"
        content={postSeo ? `${site.siteUrl}${post.fields.slug}` : site.siteUrl}
      />
      <title itemProp="name" lang={`${site.lang}_US`}>
        {postSeo ? `codybrunner.blog - ${post.frontmatter.title}` : site.title}
      </title>
    </Helmet>
  )
}

export default Seo
