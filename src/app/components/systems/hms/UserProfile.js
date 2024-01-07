import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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

const UserProfile = ({ collapsed }) => {
  const router = useRouter();
  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    if (!sessionStorage.getItem("userToken")) {
      router.push("/systems/hms/login");
    }
  };

  const userMenuStyle = {
    color: "white",
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
          Log out
        </Menu.Item>
      </Menu>
      <Avatar
        size="default"
        icon={<UserOutlined />}
        style={{ marginLeft: 22 }}
      />
      {!collapsed && (
        <>
          <span style={nameStyle}>{username}</span>
          <br />
          <p style={contactStyle}>dls@gmail.com</p>
        </>
      )}
    </div>
  );
};

export default UserProfile;
