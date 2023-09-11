import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import logo from '/src/images/logo.png'

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3} md={2} className="bg-light sidebar">
                    <Navbar className="flex-column">
                        <Navbar.Brand className='d-flex align-items-center mx-auto my-3'>
                            <img
                                src={logo}
                                width="100"
                                className="d-inline-block align-top mx-4"
                                alt="Your Logo"
                                fluid
                            />
                            <span className='my-auto fw-medium lh-sm text-wrap mx-3 dashlogoname'>Malyns Transient House</span>
                        </Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
