import React from "react";

const AppTitleBar = () => {
  const logoStyle = {
    width: "70px",
    height: "auto",
    marginRight: "8px",
    marginLeft: "10px",
    paddingTop: "10px",
  };

  return (
    <div className="demo-logo">
      <img src="/images/website/logo/logo.png" alt="Logo" style={logoStyle} />
      <span style={{ fontWeight: 600, color: "#fff" }}>
        Malines Seaman's Dormitory
      </span>
    </div>
  );
};

export default AppTitleBar;
