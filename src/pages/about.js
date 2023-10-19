import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const About = ({ data }) => {
    return (
        <Layout>
            <section class="hero2 px-5">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-6">
                            <div class="row hero2sub1" data-aos="fade-up" data-aos-duration="1000">
                                <div class="col-2 lines rounded-pill px-1"></div>
                                <div class="col-6 py-2">
                                    <h1>About Us</h1>
                                </div>
                            </div>
                            <div class="row hero2sub2" data-aos="fade-up" data-aos-duration="1000">
                                <div class="col-12">
                                    <h2 class="josefinsitalic">A premier hospitality establishment that caters specifically to
                                        the needs of seafarers seeking
                                        comfortable and convenient accommodations during their time ashore.
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
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