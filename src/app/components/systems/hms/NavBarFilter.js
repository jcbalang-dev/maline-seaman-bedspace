import React, { useState, useEffect } from "react";
const { Radio, Button, Select, Typography } = require("antd");

const { Option } = Select;
const { Text } = Typography;

const NavBarFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const handleButtonClick = (buttonType) => {
    console.log(`Button clicked: ${buttonType}`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 11,
          marginLeft: 10,
        }}
      >
        <Select defaultValue="Open select menu" style={{ width: 200 }}>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
        </Select>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#212B36",
            marginLeft: 770,
          }}
        >
          {formattedDateTime}
        </Text>
      </div>
    </>
  );
};

export default NavBarFilter;
