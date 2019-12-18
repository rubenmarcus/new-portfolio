module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },  
  siteName: 'Ruben Marcus',
  siteUrl: 'https://rubenmarcus.dev',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'vpk2s416evc2', // required
        accessToken: '4e56e78ef5dc4b281b2f68c8990d2aa4c70488f9548a7855f68bf08c003f5fcd', // required
        typeName: 'Contentful'
      }
    }
  ]
}
