import React from "react";

const AppTitleBar = () => {
  const logoStyle = {
    width: "70px",
    height: "auto",
    marginRight: "8px",
    marginLeft: "10px",
    paddingTop: "10px",
  };

  const appTitleBar = {
    position: "relative",
    left: "88px",
    bottom: "20px",
    fontWeight: "600",
  };

  return (
    <>
      <img src="/images/website/logo/logo.png" alt="Logo" style={logoStyle} />
      <span style={{ fontWeight: 600 }}>Malyns</span>
      <div style={appTitleBar}>Transient</div>
      <div style={appTitleBar}>House</div>
    </>
  );
};

export default AppTitleBar;
