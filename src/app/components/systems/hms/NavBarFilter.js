import React, { useState, useEffect } from "react";
import * as styles from "../../../../styles/navbar-filter.module.css";
const { Radio, Select, Button, Typography } = require("antd");

const { Option } = Select;
const { Text } = Typography;

const NavbarFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

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
      <span className={styles.navbarHeader}>Building Filter Room By:</span>
      <Radio.Group
        onChange={(e) => handleFilterChange(e.target.value)}
        value={selectedFilter}
      >
        <Radio value="code">Code</Radio>
        <Radio value="tag">Tag</Radio>

        <Button
          onClick={() => handleButtonClick("Button 1")}
          outline
          style={{
            marginRight: 55,
            marginLeft: 620,
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
      </Radio.Group>
      <br />
      <Select
        defaultValue="Open select menu"
        style={{ width: 200, marginRight: 630, marginLeft: 300 }}
      >
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>

      <Text
        style={{
          marginLeft: 150,
          fontSize: 15,
          fontWeight: 600,
          color: "#212B36",
        }}
      >
        {formattedDateTime}
      </Text>
    </>
  );
};

export default NavbarFilter;
