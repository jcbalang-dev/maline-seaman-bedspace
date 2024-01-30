import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import useCheckboxState from "./checkBoxState";
import getCharacterLimit from "./CharacterLimit";
const { Form, Input, Select, Switch, Checkbox, Button } = require("antd");

const buttonOkStyle = {
  marginLeft: "269px",
  position: "absolute",
  top: "80px",
  zIndex: "1",
};

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
  const [switchStatus, setSwitchStatus] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const suffixChange = (value) => {
    form.setFieldsValue({
      suffix: value === "(if applicable)" ? null : value,
    });
  };

  const validIDList = ["Passport", "Drivers License", "UMID", "SSS", "PRC"];

  const checkboxIds = [
    "passport_id",
    "drivers_license_id",
    "umid_id",
    "sss_id",
    "prc_id",
  ];

  const checkboxState = useCheckboxState(form, checkboxIds);

  const handleSwitchChange = (checked) => {
    setSwitchStatus(checked);
  };

  const handleLastNameChange = (e) => {
    const lastName =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.slice(1).toLowerCase();
    form.setFieldsValue({ last_name: lastName });
  };

  const handleFirstNameChange = (e) => {
    const firstName = e.target.value
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    form.setFieldsValue({ first_name: firstName });
  };

  const handleMiddleNameChange = (e) => {
    const middleName =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.slice(1).toLowerCase();
    form.setFieldsValue({ middle_name: middleName });
  };

  const guestModalOk = () => {
    const formData = form.getFieldsValue();
    formData.status = switchStatus ? 1 : 0;
    formData.added_by = formData.added_date;
    formData.added_date = formData.updated_date = moment().format(
      "YYYY-MM-DD HH:mm:ss"
    );

    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      if (storedUsername === "jcbalang") {
        formData.added_by = formData.updated_by = "1";
      } else if (storedUsername === "raymundpaulfontanilla") {
        formData.added_by = formData.updated_by = "2";
      }
    }

    axios
      .post("http://127.0.0.1:5001/add_guest", formData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Guest Added Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.resetFields();
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error adding guest:", error);
      });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onValuesChange={(allValues) => {
        onCheckboxChange(allValues["valid-ids"] || [], form);
      }}
      style={{
        maxWidth: 600,
        borderRadius: "8px",
      }}
    >
      <Form.Item
        name="last_name"
        label="Lastname:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          style={{ marginLeft: "5px" }}
          onChange={(e) => handleLastNameChange(e)}
        />
      </Form.Item>

      <Form.Item
        name="first_name"
        label="Firstname:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input onChange={(e) => handleFirstNameChange(e, "first_name")} />
      </Form.Item>

      <Form.Item name="middle_name" label="Middlename:">
        <Input
          style={{ marginLeft: "6px", width: "auto" }}
          onChange={(e) => handleMiddleNameChange(e)}
        />
      </Form.Item>

      <Form.Item name="suffix" label="Suffix">
        <Select
          placeholder="(if applicable)"
          onChange={suffixChange}
          allowClear
        >
          <Option value="Jr.">Jr.</Option>
          <Option value="II">II.</Option>
          <Option value="III">III.</Option>
        </Select>

        <Form.Item>
          {checkboxIds.map((id, index) => (
            <React.Fragment key={id}>
              <Form.Item>
                <Checkbox onChange={checkboxState[`${id}Checkbox`]}>
                  {validIDList[index]}
                </Checkbox>
              </Form.Item>
              <Form.Item name={id}>
                <Input
                  disabled={!checkboxState[`isChecked${id}`][0] || isSubmitted}
                  maxLength={getCharacterLimit(
                    validIDList[index].toUpperCase()
                  )}
                />
              </Form.Item>
            </React.Fragment>
          ))}
        </Form.Item>
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
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={guestModalOk} type="primary" style={buttonOkStyle}>
            OK
          </Button>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default GuestModal;
