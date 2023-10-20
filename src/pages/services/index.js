import * as React from 'react'
import Layout from '../../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Icon } from '@iconify/react'
import facebookFill from '@iconify-icons/akar-icons/facebook-fill'
import mingcuteSendFill from '@iconify-icons/mingcute/send-fill'
import * as styles from '../../styles/services.module.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'gatsby-link'


const Services = ({ data }) => {
    return (
        <Layout>
            <section className={`${styles.hero2} px-5`}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <p className={styles.montserratmedium}>Welcome aboard to your home at Maline's Bedspace Seaman's Dormitory & Transient Inn!</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5">
                <Container className="d-flex justify-content-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <StaticImage
                            src="../../images/website/iconblack1.png"
                            alt=""
                            className="img-fluid"
                        />
                </Container>
            </section>
            
            <section className={`${styles.hero2services} px-5`}>
                <Container>
                    <Row>
                        <Col md={12} className="d-flex justify-content-center align-items-center position-relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <StaticImage
                                src="../../images/website/serv1.png"
                                alt="Single Bed"
                                className="img-fluid"
                            />
                            <div className={`${styles.content} position-absolute text-center text-white`}>
                                <h1>Single Bed</h1>
                                <p>Our affordable price bedroom for a Single Person</p>
                                <Link to="/services/single-bed" role="button" className={`${styles.btn} text-dark text-capitalize d-flex justify-content-center align-items-center mx-auto px-2 rounded text-decoration-none`} >
                                    <Icon
                                        icon={mingcuteSendFill}
                                        width={24}
                                        height={24}
                                    />
                                    <span className={`${styles.montserratmedium} text-dark`}>See Details</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={`${styles.hero2services} px-5`}>
                <Container>
                    <Row>
                        <Col md={12} className="d-flex justify-content-center align-items-center position-relative" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <StaticImage
                                src="../../images/website/serv2.png"
                                alt="Double Bed"
                                className="img-fluid"
                            />
                            <div className={`${styles.content} position-absolute text-center text-white`}>
                                <h1>Double Deck</h1>
                                <p>For couples or more people</p>
                                <Link to="/services/double-bed" role="button" className={`${styles.btn} text-dark text-capitalize d-flex justify-content-center align-items-center mx-auto px-2 rounded text-decoration-none`} >
                                    <Icon
                                        icon={mingcuteSendFill}
                                        width={24}
                                        height={24}
                                    />
                                    <span className={`${styles.montserratmedium} text-dark`}>See Details</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5">
                <Container className="d-flex justify-content-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <StaticImage
                        src="../../images/website/iconblack2.png"
                        alt=""
                        className="img-fluid"
                    />
                </Container>
            </section>
            
            <section className={`${styles.hero2} px-5`}>
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={6}>
                        <Row className={styles.hero2sub1} data-aos="fade-up" data-aos-duration="1000">
                            <Col className={`${styles.lines} rounded-pill px-1`} xs={2}></Col>
                            <Col xs={8} className="py-2">
                                <h1>Social Media</h1>
                            </Col>
                        </Row>
                        <Row className='py-5' data-aos="fade-up" data-aos-duration="1000">
                            <Col xs={12} className="d-flex justify-content-center align-items-center">
                            <h2 className="josefinsitalic">Your home ashore awaits at Maline's Bedspace Seaman's Dormitory & Transient Inn. Discover comfort, community, and convenience tailored exclusively for seafarers. 🏠⚓ #SeafarersHaven #HomeAwayFromHome</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} data-aos="fade-up" data-aos-duration="1000">
                            <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                                <div className="d-flex justify-content-center align-items-center">
                                <Icon
                                    icon={facebookFill}
                                    width={52}
                                    height={52}
                                    style={{ color: '#1877f2' }}
                                />
                                <span className="px-3 pt-3">
                                    <h2 className='josefinsitalic text-dark'>/Malines Transient</h2>
                                </span>
                                </div>
                            </a>
                            </Col>
                        </Row>
                        </Col>
                        <Col md={6}>
                        <Row py-5>
                            <Col xs={12}>
                            <Carousel id="carouselExampleIndicators" ride="carousel">
                                <Carousel.Item className="active">
                                <StaticImage
                                    src="../../images/website/soc1.png"
                                    className="d-block w-100 h-100"
                                    alt="Wild Landscape"
                                />
                                </Carousel.Item>
                                <Carousel.Item>
                                <StaticImage
                                    src="../../images/website/soc2.png"
                                    className="d-block w-100 h-100"
                                    alt="Camera"
                                />
                                </Carousel.Item>
                                <Carousel.Item>
                                <StaticImage
                                    src="../../images/website/soc3.png"
                                    className="d-block w-100 h-100"
                                    alt="Exotic Fruits"
                                />
                                </Carousel.Item>
                                <Carousel.Item>
                                <StaticImage
                                    src="../../images/website/soc4.png"
                                    className="d-block w-100 h-100"
                                    alt="Exotic Fruits"
                                />
                                </Carousel.Item>
                            </Carousel>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                    </Container>
            </section>
        </Layout>
    )
}

export default Services