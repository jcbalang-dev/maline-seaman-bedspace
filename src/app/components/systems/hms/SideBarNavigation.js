import React from "react";

import {
  TableOutlined,
  HomeOutlined,
  BoxPlotOutlined,
} from "@ant-design/icons";

const { Menu } = require("antd");

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
  const menuStyle = {
    color: "white",
  };

  return <Menu theme="dark" mode="inline" items={items} style={menuStyle} />;
};

export default SideBarNavigation;
