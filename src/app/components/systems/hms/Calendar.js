import React from "react";
const { DatePicker, Space } = require("antd");
const { RangePicker } = DatePicker;
const Calendar = () => (
  <Space direction="vertical" size={12} style={{ marginLeft: "5px" }}>
    <RangePicker />
  </Space>
);
export default Calendar;
