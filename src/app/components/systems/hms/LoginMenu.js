import React, { useState, useEffect } from "react";
import * as styles from "../../../../styles/login.module.css";
import axios from "axios";

const { Form, Input, Button, Checkbox, Card } = require("antd");
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../Logo";

const LoginMenu = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      const storedUsername = sessionStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  const logInUser = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      alert("Username is requried");
    }
    if (password.length === 0) {
      alert("Password is requried");
    } else {
      axios
        .post("http://127.0.0.1:5001/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          if (response.status === 200) {
            sessionStorage.setItem("username", username);
            window.location.href =
              "http://localhost:3000/systems/hms/dashboard";
          }
        })
        .catch(function (error) {
          console.log(error, "error");
          if (error.response && error.response.status === 401) {
            alert(
              "Authentication failed. Please check your username and password."
            );
          } else if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            alert(error.response.data.message);
          } else {
            alert("Username or Password is incorrect, Please try again!");
          }
        });
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const titleLogin = "Login";

  return (
    <>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                onClick={logInUser}
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
