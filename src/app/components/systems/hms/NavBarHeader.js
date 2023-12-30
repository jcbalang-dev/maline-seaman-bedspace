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
          <Search placeholder="input search text" style={{ width: 300 }} />
        </Col>
        <Divider
          orientation="left"
          style={{
            margin: "10px 0",
            color: "#e7e7e7",
          }}
        />
      </Row>
    </>
  );
};

export default NavbarHeader;
