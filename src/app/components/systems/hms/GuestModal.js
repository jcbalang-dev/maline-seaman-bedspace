import React from "react";
import Calendar from "./Calendar";
const { Form, Input, Select, Row, Col } = require("antd");
import onDayChange from "./RoomRateUtils";

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
  const [form] = Form.useForm();

  const onRoomChange = (value) => {
    const roomCode = value < 10 ? `0${value}` : `${value}`;
    form.setFieldsValue({
      roomCode,
    });
  };

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
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="last_name"
            label="Lastname:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ marginLeft: "5px" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="first_name"
            label="Firstname:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="middle_name"
            label="Middlename:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input style={{ marginLeft: "6px" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="building number"
            label="Building #:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select building" allowClear>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="room number"
            label="Room #:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              onChange={onRoomChange}
              placeholder="Select a room number"
              allowClear
            >
              {[...Array(16)].map((_, index) => (
                <Option key={index + 1} value={(index + 1).toString()}>
                  {index + 1}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="roomCode"
            label="Room codes:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input disabled style={{ color: "black", marginLeft: "15px" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="room_tag"
            label="Room tag:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input disabled style={{ color: "black" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={14}>
          <Form.Item
            name="number of days"
            label="Number of days:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              style={{ marginLeft: "15px" }}
              onChange={(value) => onDayChange(value, form)}
              allowClear
            >
              <Option value="1 day">1 day</Option>
              <Option value="5 days">5 days</Option>
              <Option value="1 week">1 week</Option>
              <Option value="2 weeks">2 weeks</Option>
              <Option value="1 month">1 month</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="room_rate"
            label="Room rates:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input disabled style={{ color: "black", marginLeft: "5px" }} />
          </Form.Item>
        </Col>
      </Row>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "100px",
        }}
      >
        Checkin / Checkout: <Calendar />
      </p>
    </Form>
  );
};

export default GuestModal;
