import React, { useState } from "react";
const { Form, Input, Select, Switch, Checkbox } = require("antd");
import validIDFormat from "./ValidIDFormat";
import getCharacterLimit from "./CharacterLimit";

const idType = ["Passport", "Drivers License", "UMID", "SSS", "PRC"];

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const GuestModal = () => {
  const [selectedIDType, setSelectedIDType] = useState([]);
  const [switchStatus, setSwitchStatus] = useState(false);

  const handleSwitchChange = (checked) => {
    setSwitchStatus(checked);
  };

  const [form] = Form.useForm();

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      style={{
        maxWidth: 600,
        borderRadius: "8px",
      }}
    >
      <Form.Item
        name="last name"
        label="Lastname:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{ marginLeft: "5px" }} />
      </Form.Item>

      <Form.Item
        name="first name"
        label="Firstname:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="middle name"
        label="Middlename:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{ marginLeft: "6px", width: "auto" }} />
      </Form.Item>

      <Form.Item
        label="Suffix"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="(if applicable)" allowClear>
          <Option value="Jr.">Jr.</Option>
          <Option value="II">II</Option>
          <Option value="III">III</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Switch
          onChange={handleSwitchChange}
          style={{ backgroundColor: switchStatus ? "green" : "red" }}
        />
      </Form.Item>

      <Form.Item
        name="validIDCheckbox"
        label="Valid ID's:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Checkbox.Group
          options={idType}
          onChange={(checkedValues) => setSelectedIDType(checkedValues)}
        />
      </Form.Item>
      {idType.map((id) => (
        <Form.Item
          key={id}
          name={`${id.toLowerCase()}`}
          label={`${id}:`}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            style={{ marginLeft: "6px", width: "auto" }}
            maxLength={getCharacterLimit(id)}
            disabled={!selectedIDType.includes(id)}
            onChange={(e) => {
              const inputVal = e.target.value;
              const formattedVal = validIDFormat(inputVal, selectedIDType);
              form.setFieldsValue({
                [`${id.toLowerCase()}`]: formattedVal,
              });
            }}
          />
        </Form.Item>
      ))}
    </Form>
  );
};

export default GuestModal;
