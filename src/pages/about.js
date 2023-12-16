import * as React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import Layout from "../app/components/Layout";
import * as styles from "../styles/about.module.css";

const About = ({ data }) => {
  return (
    <Layout>
      <section className={`${styles.hero2} px-5`}>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Row
                className={`${styles.hero2sub1}`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Col
                  xs={2}
                  className={`${styles.lines} rounded-pill px-1`}
                ></Col>
                <Col xs={6} className="py-2">
                  <h1>About Us</h1>
                </Col>
              </Row>
              <Row
                className={`${styles.hero2sub2}`}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Col xs={12}>
                  <h2 className="josefinsitalic">
                    A premier hospitality establishment that caters specifically
                    to the needs of seafarers seeking comfortable and convenient
                    accommodations during their time ashore.
                  </h2>
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div>
                <Image
                  src="/images/website/aboutus1.png"
                  alt=""
                  className="img-fluid"
                  width={612}
                  height={641}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
