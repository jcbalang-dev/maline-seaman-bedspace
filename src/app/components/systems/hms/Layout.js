import React from "react";
import * as styles from "../../../../styles/layout.module.css";

const { Layout, Flex } = require("antd");
const { Header, Footer, Sider, Content } = Layout;

const SystemHMSLayout = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout className={styles.layoutStyle}>
      <Sider width="15%" className={styles.siderStyle}></Sider>
      <Layout>
        <Header className={styles.headerStyle}></Header>
        <Content className={styles.contentStyle}></Content>
        <Footer className={styles.footerStyle}></Footer>
      </Layout>
    </Layout>
  </Flex>
);
export default SystemHMSLayout;
