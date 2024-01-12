import React, { useState } from "react";
import * as styles from "../../../../styles/layout.module.css";
import SideBar from "./SideBar";
import FooterLayout from "./Footer";
import NavBar from "./NavBar";
const { Layout, Flex } = require("antd");
import DragAndDrop from "./DragAndDrop";

const HMSLayout = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout className={styles.layoutStyle}>
        <SideBar />
        <Layout>
          <NavBar />
          <DragAndDrop />
          <FooterLayout />
        </Layout>
      </Layout>
    </Flex>
  );
};

export default HMSLayout;
