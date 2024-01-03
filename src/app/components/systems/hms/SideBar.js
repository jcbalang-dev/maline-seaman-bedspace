import React from "react";
import AppTitleBar from "./AppTitleBar";
import SideBarNavigation from "./SideBarNavigation";
import UserProfile from "./UserProfile";

const SideBar = () => {
  return (
    <>
      <AppTitleBar />
      <SideBarNavigation />
      <UserProfile />
    </>
  );
};

export default SideBar;
