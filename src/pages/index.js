import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Icon } from '@iconify/react'
import facebookFill from '@iconify-icons/akar-icons/facebook-fill'
import * as styles from '../styles/home.module.css'

const Home = ({ data }) => {
  return (
    <Layout>
      <section className="hero2 px-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <div>
                <StaticImage 
                  src="../images/website/aboutus2.png" 
                  alt="" 
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row hero2sub1 d-flex justify-content-end" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-11 py-2">
                  <h1>Commitment to Sustainability</h1>
                </div>
                <div className="col-1 lines rounded-pill px-1"></div>
              </div>
              <div className="row hero2sub2 text-end" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-12">
                  <h2 className="josefinsitalic">We are committed to responsible business practices, including energy efficiency, waste reduction, and the use of eco-friendly products whenever possible.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container d-flex justify-content-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <StaticImage 
            src="../images/website/iconblack2.png" 
            alt="" 
            className="img-fluid" 
          />
        </div>
      </section>

      <section className="hero2 px-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12">
              <div className="row hero2sub1" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-2 lines rounded-pill px-1"></div>
                <div className="col-7 py-2">
                  <h1>Social Media</h1>
                </div>
              </div>
              <div className="row py-5" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <h2 className="josefinsitalic text-center w-50">Your home ashore awaits at Maline's Bedspace Seaman's Dormitory & Transient Inn. Discover comfort, community, and convenience tailored exclusively for seafarers. 🏠⚓ #SeafarersHaven #HomeAwayFromHome</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12" data-aos="fade-up" data-aos-duration="1000">
                  <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                    <div className="d-flex justify-content-center align-items-center">
                      <Icon 
                        icon={facebookFill} 
                        style={{ color: '#1877f2' }}
                        width="52" 
                        height="52" 
                      />
                      <span className="px-3 pt-3">
                        <h2 className="josefinsitalic text-dark">/Malines Transient</h2>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row py-5">
                <div className="col-12">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="750">
                      <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                        <StaticImage 
                          src="../images/website/soc1.png" 
                          alt="" 
                          className="img-fluid" 
                        />
                      </a>
                    </div>
                    <div className="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                      <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                        <StaticImage 
                          src="../images/website/soc2.png" 
                          alt="" 
                          className="img-fluid" 
                        />
                      </a>
                    </div>
                    <div className="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2250">
                      <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                        <StaticImage 
                          src="../images/website/soc3.png" 
                          alt="" 
                          className="img-fluid" 
                        />
                      </a>
                    </div>
                    <div className="col-md-3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                      <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                        <StaticImage 
                          src="../images/website/soc4.png" 
                          alt="" 
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
