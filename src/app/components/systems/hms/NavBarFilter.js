import React, { useState } from "react";
const { Radio, Button } = require("antd");

const NavBarFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };
  const handleButtonClick = (buttonType) => {
    console.log(`Button clicked: ${buttonType}`);
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
      <div style={{ marginLeft: 620, paddingTop: 10 }}>
        <Button
          onClick={() => handleButtonClick("Button 1")}
          outline
          style={{
            marginRight: 10,
            color: "#3056D3",
            borderColor: "#3056D3",
            width: 120,
          }}
        >
          Check In
        </Button>

        <Button
          onClick={() => handleButtonClick("Button 2")}
          style={{
            marginRight: 16,
            color: "#ffffff",
            backgroundColor: "#13C296",
            width: 120,
          }}
        >
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default NavBarFilter;
