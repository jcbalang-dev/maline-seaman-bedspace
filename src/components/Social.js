import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
import * as styles from "../styles/social.module.css";

const Social = () => {
  return (
    <Row className={styles.socialfb}>
      <Col md={12} className="d-flex justify-content-end">
        <a
          href="https://www.facebook.com/lynsbedspace09260073532"
          rel="noreferrer"
          target="_blank"
          className="text-white"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <Facebook width="34" height="34" />
            <span className="px-3 circularmed">@MalinesDormitory</span>
          </div>
        </a>
      </Col>
    </Row>
  );
};

export default Social;
