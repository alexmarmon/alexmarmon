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
  proxy: {
    prefix: '/api',
    url: `http://127.0.0.1:${port + 30}`
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
  ],
}
