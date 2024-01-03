import React, { useState } from "react";

import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Layout, Menu, theme, Avatar } = require("antd");
const { Header, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const nameStyle = {
  marginLeft: 10,
};

const contactStyle = {
  position: "relative",
  left: "45px",
};

const items = [
  getItem("Settings", "1", <SettingOutlined />),
  getItem("Log out", "2", <LogoutOutlined />),
];

const UserProfile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
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
          <Avatar size="default" icon={<UserOutlined />} />,
          <span style={nameStyle}>Do Little</span>
          <br />
          <p style={contactStyle}>dls@gmail.com</p>
        </Sider>
      </Layout>
    </>
  );
};

export default UserProfile;
