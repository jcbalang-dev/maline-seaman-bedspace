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
    <div className="demo-logo">
      <img src="/images/website/logo/logo.png" alt="Logo" style={logoStyle} />
      <span style={{ fontWeight: 600 }}>Malines Seaman's Dormitory</span>
    </div>
  );
};

export default AppTitleBar;
