const year = new Date().getFullYear()

module.exports = {
  siteMetadata: {
    author: 'Cody Brunner',
    copyright: `© 2017-${year} Cody Brunner`,
    description: 'Personal & technology blog by Cody Brunner.',
    googleVerify: 'TODO',
    keywords: 'personal blog, technology blog, Cody Brunner, Portland Oregon',
    lang: 'en',
    siteUrl: 'TODO',
    title: 'codybrunner.blog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    }
  ]
}
