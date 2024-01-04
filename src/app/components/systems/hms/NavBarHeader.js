import React from "react";
const { Input, Space } = require("antd");

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const NavBarHeader = () => (
  <Space
    direction="horizontal"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      width: "100%",
      fontWeight: 600,
      fontSize: 20,
      paddingTop: 11,
      marginLeft: 10,
    }}
  >
    <p
      style={{
        marginBottom: 0,
        order: 1,
      }}
    >
      1856C Agoncillio St. Malate Manila
    </p>
    <Search
      placeholder="Search..."
      onSearch={onSearch}
      style={{
        width: 300,
        order: 2,
        paddingTop: 11,
        marginRight: 20,
      }}
    />
  </Space>
);

export default NavBarHeader;
