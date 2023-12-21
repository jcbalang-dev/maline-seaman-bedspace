import * as React from "react";
import Head from "next/head";
import SimpleLayout from "../../app/components/simple-layout";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "next/link";
import * as styles from "../../styles/services.module.css";
import Image from "next/image";

const SingleBedroom = ({ data }) => {
  const rightArrowIcon = {
    backgroundImage:
      'url("https://api.iconify.design/ic/round-keyboard-arrow-right.svg?width=18&height=18")',
    width: "18px",
    height: "18px",
    display: "inline-block",
    verticalAlign: "middle",
    padding: "5px 0 0 5px",
  };

  const locationIcon = {
    content: `url('https://api.iconify.design/ion/location.svg?width=24&height=24')`,
    display: "inline-block",
    verticalAlign: "middle",
    padding: "0px 5px 5px 0px",
  };

  const gmapslocStyle = {
    content:
      "url('https://api.iconify.design/ion/location.svg?width=24&height=24')",
    display: "inline-block",
    verticalAlign: "middle",
    padding: "0px 5px 5px 0px",
  };

  const pageTitle = "Single Bedroom";
  const faviconUrl = "/images/website/icon/logo.ico";

  return (
    <SimpleLayout>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={faviconUrl} />
      </Head>
      <section>
        <Container className="py-5 montserratmedium breadcrumb px-3">
          <Breadcrumb>
            <Breadcrumb.Item as={Link} href="/services">
              Services
            </Breadcrumb.Item>
            <Breadcrumb.Item as={Link} href="/services/single-bedroom">
              Single Bedroom
            </Breadcrumb.Item>
            <div style={rightArrowIcon}></div>
          </Breadcrumb>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col md={6}>
              <p className="d-inline-block lh-1 tradeext fw-bold fs-2 pe-3">
                Single Bedroom
              </p>

              <p className="lh-1 montserratmedium">
                <div style={locationIcon}></div>
                1856c Agoncillio Street Malate Manila
              </p>
            </Col>
            <Col md={6} className={`text-end ${styles.amountperday}`}>
              <p className="montserratbold fs-1 d-inline-block">₱150</p>
              <p className="montserratbold fs-6 d-inline-block">/per day</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="p-1">
              <Image
                src="/images/website/singleimg1.png"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <Row>
                <Col className="p-1" md={6}>
                  <Image
                    src="/images/website/singleimg2.png"
                    alt=""
                    className="img-fluid"
                  />
                </Col>
                <Col className="p-1" md={6}>
                  <Image
                    src="/images/website/singleimg3.png"
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="p-1" md={6}>
                  <Image
                    src="/images/website/singleimg4.png"
                    alt=""
                    className="img-fluid"
                  />
                </Col>
                <Col className="p-1 position-relative" md={6}>
                  <Image
                    src="/images/website/singleimg5.png"
                    alt=""
                    className="img-fluid"
                  />
                  <button
                    type="button"
                    className={`btn btn-primary ${styles.singlehero1} position-absolute bottom-0 end-0 m-3 text-capitalize montserratmedium px-3 text-dark`}
                    data-bs-toggle="modal"
                    data-bs-target="#targetModal"
                  >
                    View All Photos
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="targetModal"
                    tabIndex="-1"
                    aria-labelledby="ModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="ModalLabel">
                            Photo Gallery
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div
                            id="carouselImageIndicators"
                            className="carousel slide"
                            data-mdb-ride="carousel"
                          >
                            <div className="carousel-indicators">
                              <button
                                type="button"
                                data-mdb-target="#carouselImageIndicators"
                                data-mdb-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-mdb-target="#carouselImageIndicators"
                                data-mdb-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-mdb-target="#carouselImageIndicators"
                                data-mdb-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                              <button
                                type="button"
                                data-mdb-target="#carouselImageIndicators"
                                data-mdb-slide-to="3"
                                aria-label="Slide 4"
                              ></button>
                            </div>
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <Image
                                  src="/images/website/singleimg1.png"
                                  alt="singleimg1"
                                  className="d-block w-100 h-100"
                                />
                              </div>
                              <div className="carousel-item">
                                <Image
                                  src="/images/website/singleimg2.png"
                                  alt="singleimg2"
                                  className="d-block w-100 h-100"
                                />
                              </div>
                              <div className="carousel-item">
                                <Image
                                  src="/images/website/singleimg3.png"
                                  alt="singleimg3"
                                  className="d-block w-100 h-100"
                                />
                              </div>
                              <div className="carousel-item">
                                <Image
                                  src="/images/website/singleimg4.png"
                                  alt="singleimg4"
                                  className="d-block w-100 h-100"
                                />
                              </div>
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-mdb-target="#carouselImageIndicators"
                              data-mdb-slide="prev"
                            ></button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-mdb-target="#carouselImageIndicators"
                              data-mdb-slide="next"
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className={`${styles.singlehero2} px-3`}>
          <Row>
            <Col xs={2} className={`${styles.lines} rounded-pill px-1`}></Col>
            <Col xs={3} className="py-2">
              <h1 className="tradeext">Overview</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="montserratmedium fs-5 py-5">
                <li>Free water and electricity</li>
                <li>
                  Can cook (Kitchen area located on the ground floor, free use
                  of kitchen utensils)
                </li>
                <li>Can do laundry using washing machine and dryer</li>
                <li>Fully air-conditioned (6pm to 6am)</li>
                <li>With Wi-Fi in each room</li>
                <li>24/7 open, no curfew</li>
                <li>We provide bedding and pillows</li>
                <li>DORMITORY TYPE BEDSPACE 6-12 pax</li>
                <li>Non-refundable but consumable</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className={`${styles.singlehero2} px-3`}>
          <Row>
            <Col xs={2} className={`${styles.lines} rounded-pill px-1`}></Col>
            <Col xs={6} className="py-2">
              <h1 className="tradeext">Room Rate</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="montserratmedium fs-3 py-5">
                <li>1 DAY - 150</li>
                <li>5 DAYS - 800</li>
                <li>1 WEEK - 1050</li>
                <li>2 WEEKS - 2100</li>
                <li>1 MONTH - 3500</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className={`${styles.locationmapadds} px-3`}>
          <Row>
            <Col md={6}>
              <Row>
                <Col
                  xs={2}
                  className={`${styles.lines} rounded-pill px-1`}
                ></Col>
                <Col xs={10} className="py-2">
                  <h1 className="tradeext">Location/Map</h1>
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-end"
            >
              <small className="montserratmedium fw-bold">
                <a href="https://goo.gl/maps/fmYGpbsHeCSK5CMA7">
                  View on Google Maps
                </a>
              </small>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="gmaps py-5">
                <Row>
                  <Col md={12}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3861.4496164178604!2d120.9917471!3d14.5734373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c986c8f53d9b%3A0xec0007e2721da26e!2s1856c%20Agoncillo%20St%2C%20Malate%2C%20Manila%2C%201004%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693649349986!5m2!1sen!2sph"
                      width="100%"
                      height="450"
                      style={{ border: "0", borderRadius: "16px" }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    <small className="montserratmed d-inline-block">
                      <div style={gmapslocStyle}></div>
                      1856c Agoncillio Street Malate Manila
                    </small>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </SimpleLayout>
  );
};

export default SingleBedroom;
