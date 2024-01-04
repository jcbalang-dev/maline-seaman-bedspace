import React, { useState } from "react";

import AppTitleBar from "./AppTitleBar";
import UserProfile from "./UserProfile";
import SidebarNavigation from "./SideBarNavigation";

const { Layout } = require("antd");
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width="19%"
    >
      <AppTitleBar collapsed={collapsed} />
      <SidebarNavigation />
      <UserProfile collapsed={collapsed} />
    </Sider>
  );
};

export default SideBar;
