import React, { useState, useEffect } from "react";
const { Radio } = require("antd");

const NavBarFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p
        style={{
          fontSize: 16,
          fontWeight: 600,
          paddingTop: 11,
          marginLeft: 10,
          marginBottom: 0,
        }}
      >
        Building Filter Room By:
      </p>
      <span style={{ marginLeft: 10, marginTop: 12 }}>
        <Radio.Group
          onChange={(e) => handleFilterChange(e.target.value)}
          value={selectedFilter}
        >
          <Radio style={{ marginRight: 8 }} value="code">
            Code
          </Radio>
          <Radio value="tag">Tag</Radio>
        </Radio.Group>
      </span>
    </div>
  );
};

export default NavBarFilter;
