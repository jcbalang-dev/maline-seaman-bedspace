import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/about.module.css'

const About = ({ data }) => {
    return (
        <Layout>
            <section className={`${styles.hero2} px-5`}>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className={`row ${styles.hero2sub1}`} data-aos="fade-up" data-aos-duration="1000">
                                <div className={`col-2 ${styles.lines} rounded-pill px-1`}></div>
                                <div className="col-6 py-2">
                                    <h1>About Us</h1>
                                </div>
                            </div>
                            <div className={`row ${styles.hero2sub2}`} data-aos="fade-up" data-aos-duration="1000">
                                <div className="col-12">
                                    <h2 className="josefinsitalic">A premier hospitality establishment that caters specifically to
                                        the needs of seafarers seeking
                                        comfortable and convenient accommodations during their time ashore.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div>
                                <StaticImage 
                                    src='../images/website/aboutus1.png'
                                    alt=''
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About