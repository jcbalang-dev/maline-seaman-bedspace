import * as React from "react";
import Head from "next/head";

import { Facebook } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import Layout from "../app/components/layout";
import * as styles from "../styles/home.module.css";

const Home = ({ data }) => {
  const pageTitle = "Maline's Seaman's Dormitory";
  const faviconUrl = "/images/website/icon/logo.ico";

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={faviconUrl} />
      </Head>
      <section className={`${styles.hero2} px-5`}>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              md={6}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div>
                <Image
                  src="/images/website/aboutus2.png"
                  alt=""
                  className="img-fluid"
                  width={612}
                  height={642}
                />
              </div>
            </Col>
            <Col md={6}>
              <Row
                className={`${styles.hero2sub1} d-flex justify-content-end`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Col xs={11} className="py-2">
                  <h1>Commitment to Sustainability</h1>
                </Col>
                <Col
                  xs={1}
                  className={`${styles.lines} rounded-pill px-1`}
                ></Col>
              </Row>
              <Row
                className={`${styles.hero2sub2} text-end`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Col xs={12}>
                  <h2 className="josefinsitalic">
                    We are committed to responsible business practices,
                    including energy efficiency, waste reduction, and the use of
                    eco-friendly products whenever possible.
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container
          className="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Image
            src="/images/website/icon/iconblack2.png"
            alt=""
            className="img-fluid"
            width={68}
            height={77}
          />
        </Container>
      </section>

      <section className={`${styles.hero2} px-5`}>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col>
              <Row
                className={`${styles.hero2sub1}`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Col
                  xs={2}
                  className={`${styles.lines} rounded-pill px-1`}
                ></Col>
                <Col xs={7} className="py-2">
                  <h1>Social Media</h1>
                </Col>
              </Row>
              <Row className="py-5" data-aos="fade-up" data-aos-duration="1000">
                <Col className="d-flex justify-content-center align-items-center">
                  <h2 className="josefinsitalic text-center w-50">
                    Your home ashore awaits at Maline's Bedspace Seaman's
                    Dormitory & Transient Inn. Discover comfort, community, and
                    convenience tailored exclusively for seafarers. 🏠⚓
                    #SeafarersHaven #HomeAwayFromHome
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col data-aos="fade-up" data-aos-duration="1000">
                  <a
                    href="https://www.facebook.com/lynsbedspace09260073532"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <Facebook
                        width={52}
                        height={52}
                        style={{ color: "#1877f2" }}
                      />
                      <span className="px-3 pt-3">
                        <h2 className="josefinsitalic text-dark">
                          /Malines Transient
                        </h2>
                      </span>
                    </div>
                  </a>
                </Col>
              </Row>
              <Row className="py-5">
                <Col>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col
                      md={3}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="750"
                    >
                      <a
                        href="https://www.facebook.com/lynsbedspace09260073532"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/images/website/soc1.png"
                          alt=""
                          className="img-fluid"
                          width={318}
                          height={333}
                        />
                      </a>
                    </Col>
                    <Col
                      md={3}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1500"
                    >
                      <a
                        href="https://www.facebook.com/lynsbedspace09260073532"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/images/website/soc2.png"
                          alt=""
                          className="img-fluid"
                          width={318}
                          height={333}
                        />
                      </a>
                    </Col>
                    <Col
                      md={3}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2250"
                    >
                      <a
                        href="https://www.facebook.com/lynsbedspace09260073532"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/images/website/soc3.png"
                          alt=""
                          className="img-fluid"
                          width={318}
                          height={333}
                        />
                      </a>
                    </Col>
                    <Col
                      md={3}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="3000"
                    >
                      <a
                        href="https://www.facebook.com/lynsbedspace09260073532"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/images/website/soc4.png"
                          alt=""
                          className="img-fluid"
                          width={318}
                          height={333}
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
