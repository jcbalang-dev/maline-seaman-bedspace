import React, { useState } from "react";

import {
  TableOutlined,
  HomeOutlined,
  BoxPlotOutlined,
} from "@ant-design/icons";

const { Layout, Menu, theme } = require("antd");
const { Header, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Dashboard", "2", <TableOutlined />),
  getItem("Services", "sub1", <BoxPlotOutlined />, [
    getItem("Available Pending", "3"),
    getItem("On - Going", "4"),
    getItem("Out - Going", "5"),
    getItem("Cancelled", "6"),
  ]),
];

const SideBarNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "#fff" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
      </Layout>
    </Layout>
  );
};

export default SideBarNavigation;
