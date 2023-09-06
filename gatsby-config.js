/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Maline's Bedspace Seaman's Dormitory and Transient Inn`,
    description: `Seaman's Haven`,
    siteUrl: `https://malineseamanbedspace.com.ph`,
    copyright: `Do Little Studio Copyright 2023`,
    contact: `dev.jcbalang@gmail.com`
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms", 
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          "G-HR6XS55W4R" // Google Analytics / GA
        ]
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "projects",
        "path": "./src/projects/"
      }
    }
  ]
};