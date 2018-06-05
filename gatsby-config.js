const port = parseInt(process.env.PORT, 10)

module.exports = {
  siteMetadata: {
    title: 'Alex Marmon',
    description: 'Developer & Entrepreneur living in Coeur d\'Alene, ID.',
    keywords: 'Alex Marmon, Developer, Coeur d\'Alene Web Developer, Two7, That\'s Lofty',
    url: 'https://www.alexmarmon.com',
    type: 'website'
    // OG image set in layout index
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Josefin+Sans\:400',  // eslint-disable-line
          'Raleway\:500'  // eslint-disable-line
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-120428398-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      },
    }
  ],
}
