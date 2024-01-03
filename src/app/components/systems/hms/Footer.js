import React from "react";
const { Layout } = require("antd");
const { Footer } = Layout;

const FooterLayout = () => {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default FooterLayout;
