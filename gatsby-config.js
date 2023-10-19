/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Maline's Bedspace Seaman's Dormitory and Transient Inn`,
    description: `Seaman's Haven`,
    siteUrl: `https://malineseamanbedspace.com.ph`,
    copyright: `Do Little Studio Copyright 2023`,
    contactUs: {
      0: {
        name: `John Christian Balang`,
        email: `dev.jcbalang@gmail.com`,
        contact: `(63) 977 742 4157`
      },
      1: {
        name: `Raymund Fontanilla`,
        email: `raymundpaulfontanilla@gmail.com`,
        contact: `(63) 935 596 0680`
      },
      2: {
        name: `Nhico Noel Ortazon`,
        email: `nhico.ortazon@gmail.com`,
        contact: `(63) 991 691 3077`
      },
      3: {
        name: `Darryl Kaye Abella Sanga`,
        email: `darrylkayeabellasanga@gmail.com`,
        contact: `(63) 919 750 5914`
      }
    }
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark", 
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
    }
  ]
};