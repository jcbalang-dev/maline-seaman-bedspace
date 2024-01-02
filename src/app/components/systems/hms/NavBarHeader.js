import React from "react";
const { Row, Col, Input, Divider } = require("antd");
import * as styles from "../../../../styles/navbar-header.module.css";

const { Search } = Input;

const NavbarHeader = () => {
  return (
    <>
      <Row className={styles.navbarContainer}>
        <Col className={styles.navbarHeader}>
          1856C Agoncillio St. Malate Manila
        </Col>
        <Col>
          <Search placeholder="Search..." style={{ width: 300 }} />
        </Col>
      </Row>
    </>
  );
};

export default NavbarHeader;
