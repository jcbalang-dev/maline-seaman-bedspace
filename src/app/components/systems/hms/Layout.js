import React, { useState } from "react";
import * as styles from "../../../../styles/layout.module.css";
import SideBar from "./SideBar";

const { Layout, Flex } = require("antd");
const { Header, Footer, Content } = Layout;

const HMSLayout = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout className={styles.layoutStyle}>
        <SideBar />
        <Layout>
          <Header className={styles.headerStyle}></Header>
          <Content className={styles.contentStyle}></Content>
          <Footer className={styles.footerStyle}></Footer>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default HMSLayout;
