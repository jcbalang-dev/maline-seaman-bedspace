import * as React from 'react'
import Layout from '../../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Icon } from '@iconify/react'
import facebookFill from '@iconify-icons/akar-icons/facebook-fill'

const Services = ({ data }) => {
    return (
        <Layout>
            <section class="hero2 px-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">Welcome aboard to your home at Maline's Bedspace Seaman's Dormitory & Transient Inn!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-5">
                <div class="container d-flex justify-content-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <StaticImage
                        src="../../images/website/iconblack1.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
            </section>

            <section class="hero2services px-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center align-items-center position-relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <StaticImage
                                src="../../images/website/serv1.png"
                                alt="Single Bed"
                                className="img-fluid"
                            />
                            <div class="content position-absolute text-center text-white">
                                <h1>Single Bed</h1>
                                <p>Our affordable price bedroom for Single Person</p>
                                <a href="single.html" role="button" class="btn text-dark text-capitalize d-flex justify-content-center align-items-center mx-auto px-3">
                                    <iconify-icon icon="mingcute:send-fill" width="24" height="24"  ></iconify-icon>
                                    <span class="text-dark">See Details</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="hero2services px-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center align-items-center position-relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <StaticImage
                                src="../../images/website/serv2.png"
                                alt="Double Bed"
                                className="img-fluid"
                            />
                            <div class="content position-absolute text-center text-white">
                                <h1>Double Deck</h1>
                                <p>For couple or more people</p>
                                <a href="double.html" role="button" class="btn text-dark text-capitalize d-flex justify-content-center align-items-center mx-auto px-3">
                                    <iconify-icon icon="mingcute:send-fill" width="24" height="24"  ></iconify-icon>
                                    <span class="text-dark">See Details</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-5">
                <div class="container d-flex justify-content-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <StaticImage
                        src="../../images/website/iconblack2.png"
                        alt=""
                        className="img-fluid"
                    />
                </div>
            </section>
            
            <section class="hero px-5">
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-6">
                            
                            <div class="row hero2sub1" data-aos="fade-up" data-aos-duration="1000">
                                <div class="col-2 lines rounded-pill px-1"></div>
                                <div class="col-8 py-2">
                                    <h1>Social Media</h1>
                                </div>
                            </div>

                            <div class="row py-5" data-aos="fade-up" data-aos-duration="1000">
                                <div class="col-12 d-flex justify-content-center align-items-center">
                                    <h2 class="josefinsitalic ">Your home ashore awaits at Maline's Bedspace
                                        Seaman's Dormitory & Transient Inn. Discover comfort, community, and
                                        convenience tailored exclusively for seafarers. 🏠⚓ #SeafarersHaven #HomeAwayFromHome
                                    </h2>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12" data-aos="fade-up" data-aos-duration="1000">
                                    <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <Icon
                                                icon={facebookFill}
                                                width={52}
                                                height={52}
                                                style={{ color: '#1877f2' }}
                                            />
                                            <span class="px-3 pt-3">
                                                <h2 class="josefinsitalic text-dark">/Malines Transient</h2>
                                            </span>

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row py-5">
                                <div class="col-12">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
                                        <div class="carousel-indicators">
                                        <button
                                            type="button"
                                            data-mdb-target="#carouselExampleIndicators"
                                            data-mdb-slide-to="0"
                                            class="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                        ></button>
                                        <button
                                            type="button"
                                            data-mdb-target="#carouselExampleIndicators"
                                            data-mdb-slide-to="1"
                                            aria-label="Slide 2"
                                        ></button>
                                        <button
                                            type="button"
                                            data-mdb-target="#carouselExampleIndicators"
                                            data-mdb-slide-to="2"
                                            aria-label="Slide 3"
                                        ></button>
                                        <button
                                            type="button"
                                            data-mdb-target="#carouselExampleIndicators"
                                            data-mdb-slide-to="3"
                                            aria-label="Slide 4"
                                        ></button>
                                        </div>
                                        <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <StaticImage
                                                src="../../images/website/soc1.png"
                                                className="d-block w-100 h-100"
                                                alt="Wild Landscape"
                                            />
                                        </div>
                                        <div class="carousel-item">
                                            <StaticImage
                                                src="../../images/website/soc2.png"
                                                className="d-block w-100 h-100"
                                                alt="Camera"
                                            />
                                        </div>
                                        <div class="carousel-item">
                                            <StaticImage
                                                src="../../images/website/soc3.png"
                                                className="d-block w-100 h-100"
                                                alt="Exotic Fruits"
                                            />
                                        </div>
                                        <div class="carousel-item">
                                            <StaticImage
                                                src="../../images/website/soc4.png"
                                                className="d-block w-100 h-100"
                                                alt="Exotic Fruits"
                                            />
                                        </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                        </button>
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

export default Services