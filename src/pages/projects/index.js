import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as styles from "../../styles/projects.module.css";
import axios from 'axios'

import { Link } from "gatsby";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import logo from "/src/images/logo.png";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logInUser = (e) => {
    e.preventDefault();
    if (username.length === 0) {
      alert("Username is requried");
    } if (password.length === 0) {
      alert("Password is requried");
    } else {
      axios
        .post('http://127.0.0.1:5001/login', {
          username: username,
          password: password,
        })
        .then(function (response) {
          if(response.status === 200) {
            window.location.href='http://localhost:8000/projects/home/'
          }
        })
        .catch(function (error) {
          console.log(error, 'error');
          if (error.response && error.response.status === 401) {
            alert("Authentication failed. Please check your username and password.");
          } else if (error.response && error.response.data && error.response.data.message) {
            alert(error.response.data.message);
          } else {
            alert("Username or Password is incorrect, Please try again!");
          }
        });
    }
  };

  return (
    <>
      <div className={styles.bg}>
        <Container className={`${styles.bg} pt-5`}>
          <Row>
            <Col xs={4} md={3} lg={2}>
              <Link to="/projects/">
                <Image src={logo} alt="logo" fluid />
              </Link>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} lg={8}>
              <Card className={`${styles.cardform} rounded-5 px-5 pb-3`}>
                <Card.Body>
                  <div className="mb-3">
                    <p className={`fw-bold mb-2 ${styles.loginheader}`}>
                      Login
                    </p>
                    <p className={`mb-5 ${styles.loginsubheader}`}>
                      Login to access your Account
                    </p>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicusername">
                        <Form.Label className={styles.formlabellogin}>
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={username}
                          onChange={(e)=> setUsername(e.target.value)}
                          className={styles.formtxtboxlogin}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className={styles.formlabellogin}>
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                          className={styles.formtxtboxlogin}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="position-relative mb-5"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                          className={`${styles.formlogincheckbox} fw-medium position-absolute pt-2`}
                        />
                        <Form.Text
                          className={`position-absolute top-0 end-0 ${styles.forgotpass}`}
                        >
                          <Link to="/projects/">Forgot Password</Link>
                        </Form.Text>
                      </Form.Group>

                      <Button
                        type="submit"
                        onClick={logInUser}
                        className={`mt-5 w-100 fw-semibold ${styles.formbtnsubmit}`}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
