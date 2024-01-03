import React from "react";
const { Layout } = require("antd");
const { Footer } = Layout;

const FooterLayout = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©{new Date().getFullYear()} Created by Big Boy Developers
    </Footer>
  );
};

export default FooterLayout;
