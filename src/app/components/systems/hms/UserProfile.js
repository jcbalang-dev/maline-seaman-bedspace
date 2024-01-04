import React, { useState } from "react";

import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Menu, Avatar } = require("antd");

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
  color: "white",
};

const contactStyle = {
  position: "relative",
  left: "45px",
  color: "white",
};

const items = [
  getItem("Settings", "1", <SettingOutlined />),
  getItem("Log out", "2", <LogoutOutlined />),
];

const UserProfile = () => {
  const userMenuStyle = {
    color: "white",
  };

  return (
    <div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        style={userMenuStyle}
      />
      <Avatar size="default" icon={<UserOutlined />} />
      <span style={nameStyle}>Do Little</span>
      <br />
      <p style={contactStyle}>dls@gmail.com</p>
    </div>
  );
};

export default UserProfile;
