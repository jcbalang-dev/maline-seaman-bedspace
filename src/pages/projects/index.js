import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/styles/global.css'

import { Container, Row, Col, Image, Form, Button, Card } from 'react-bootstrap'
import logo from '/src/images/logo.png'

const Projects = () => {


    return (
        <>
            <div className="bg">
                <Container className='pt-5'>

                    <Row>
                        <Col xs={4} md={3} lg={2}>
                            <a href="#!">
                                <Image src={logo} alt="logo" fluid />
                            </a>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} lg={8}>
                            <Card className="cardform rounded-5 px-5 pb-3">
                                <Card.Body>
                                    <div className="mb-3">
                                        <p className="fw-bold mb-2 loginheader">Login</p>
                                        <p className=" mb-5 loginsubheader">Login to access your Golobe account</p>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className='formlabellogin'>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="contactdolittle@gmail.com" className='formtxtboxlogin' />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className='formlabellogin'>Password</Form.Label>
                                                <Form.Control type="password" placeholder="•••••••••••••••••••••••••" className='formtxtboxlogin' />
                                            </Form.Group>

                                            <Form.Group className="position-relative mb-5" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Remember me" className='formlogincheckbox fw-medium position-absolute pt-2' />
                                                <Form.Text className='position-absolute top-0 end-0 forgotpass'>
                                                    <a href="#!">Forgot Password</a>
                                                </Form.Text>
                                            </Form.Group>

                                            <Button type="submit" className='mt-5 w-100 fw-semibold formbtnsubmit'>
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
    )
}

export default Projects
