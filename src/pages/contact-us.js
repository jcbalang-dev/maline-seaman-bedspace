import * as React from "react";
import Head from "next/head";
import SimpleLayout from "../app/components/simple-layout";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "../styles/contact-us.module.css";

const ContactUsPage = ({ data }) => {
  const pageTitle = "Contact Us";
  const faviconUrl = "/images/website/icon/logo.ico";

  return (
    <SimpleLayout>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={faviconUrl} />
      </Head>
      <region>
        <Container className={styles.contacthero1}>
          <Row>
            <Col md={6} className="px-5 pt-5">
              <Row className="pb-5">
                <Col>
                  <Row>
                    <Col className="d-inline-block px-1" xs={1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"
                        ></path>
                        <circle
                          cx="256"
                          cy="192"
                          r="48"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        ></circle>
                      </svg>
                    </Col>
                    <Col className="d-inline-block px-4" xs={11}>
                      <p className="fs-3 lh-1 montserratbold d-inline-block">
                        Location:
                      </p>
                      <p className="lh-1 opacity-75 fs-3">
                        1856c Agoncillio Street Malate Manila
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col className="d-inline-block px-1" xs={1}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 16 16"
                      >
                        <g transform="rotate(90 8 8)">
                          <path
                            fill="currentColor"
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608a17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                          ></path>
                        </g>
                      </svg>
                    </Col>
                    <Col className="d-inline-block px-4" xs={11}>
                      <p className="fs-3 lh-1 montserratbold d-inline-block">
                        Contact Number:
                      </p>
                      <p className="lh-1 opacity-75 fs-3">
                        09260073532 / 09275270593
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4495256949194!2d120.98917217582044!3d14.573442477739547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c986c8f53d9b%3A0xec0007e2721da26e!2s1856c%20Agoncillo%20St%2C%20Malate%2C%20Manila%2C%201004%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693655662389!5m2!1sen!2sph"
                width="100%"
                height="717"
                style={{ border: 0, borderRadius: "30px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </region>
    </SimpleLayout>
  );
};

export default ContactUsPage;
