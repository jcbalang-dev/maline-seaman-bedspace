import React from "react";
import * as styles from "../../../../styles/login.module.css";
import HMSLayout from "../hms/index";
import Favicon from "../../favicon/Favicon";

const { Form, Input, Button, Checkbox, Card } = require("antd");
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../Logo";

const LoginMenu = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const titleLogin = "Login";

  return (
    <>
      <HMSLayout pageTitle={titleLogin}></HMSLayout>
      <Favicon />
      <Logo headStyle={{ paddingTop: "5px" }} />
      <div className={styles.loginBackground} />
      <div className={styles.loginContainer}>
        {" "}
        <Card
          title="Login"
          bordered={true}
          className={`${styles.cardBackground}`}
          headStyle={{
            backgroundColor: "#438775",
            color: "#d9d9d9",
            fontWeight: "bold",
          }}
        >
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a style={{ float: "right" }} href="/forgot-password">
                Forgot Password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#182a32",
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default LoginMenu;
