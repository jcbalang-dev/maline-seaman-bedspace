import { Link, graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const Home = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & Web developer based in the Philippines</p>
          <Link className={styles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`