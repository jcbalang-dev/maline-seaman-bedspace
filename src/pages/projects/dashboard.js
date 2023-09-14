import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Dropdown } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import logo from '/src/images/logo.png';
import userfooter from '/src/images/user.png';

const Dashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <Container fluid>
            <Row className='position-relative'>
                {/* Sidebar */}
                <Col sm={3} md={2} className="min-vh-100 p-0 position-relative d-flex justify-content-between">
                    <Navbar className="flex-column position-relative">
                        {/* Logo and Brand */}
                        <Navbar.Brand className='d-flex align-items-center my-3'>
                            <img
                                src={logo}
                                width="100"
                                className="d-inline-block align-top mx-4"
                                alt="Logo"
                                fluid
                            />
                            <span className='my-auto fw-medium lh-sm text-wrap mx-3 homelogoname'>Malyns Transient House</span>
                        </Navbar.Brand>
                        {/* Sidebar Navigation */}
                        <Nav className="flex-column w-100">
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'>
                                <Icon icon="lucide:home" width="21.28" height="21.28" />
                                <span className='mx-2'>Home</span>
                            </Nav.Link>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'>
                                <Icon icon="lucide:layout-dashboard" width="21.28" height="21.28" />
                                <span className='mx-2'>Dashboard</span>
                            </Nav.Link>
                            {/* Services Menu */}
                            <div className='servicesmenu px-5 d-flex align-items-center justify-content-between' onClick={toggleMenu}>
                                <div className="d-flex align-items-center">
                                    <Icon icon="lucide:box" width="21.28" height="21.28" />
                                    <span className='mx-2'>Services</span>
                                </div>
                                <Icon icon={isMenuOpen ? 'akar-icons:chevron-up' : 'akar-icons:chevron-down'} width="16" height="16" />
                            </div>
                            {/* Services Submenu (conditionally rendered) */}
                            {isMenuOpen && (
                                <div className="servicesmenu-position">
                                    <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>Available Pending</span></Nav.Link>
                                    <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>On-Going</span></Nav.Link>
                                    <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>Out-Going</span></Nav.Link>
                                    <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>Cancelled</span></Nav.Link>
                                </div>
                            )}
                        </Nav>
                    </Navbar>
                    {/* Sidebar Footer */}
                    <div className='footer position-absolute w-100 bottom-0 left-0'>
                        <div className='divider position-relative w-75'></div>
                        {/* Sidebar Footer Navigation */}
                        <div className='sidenav-footer py-5'>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'>
                                <Icon icon="lucide:message-square" width="21.28" height="21.28" />
                                <span className='mx-2'>Chat</span>
                            </Nav.Link>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'>
                                <Icon icon="lucide:settings" width="21.28" height="21.28" />
                                <span className='mx-2'>Settings</span>
                            </Nav.Link>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'>
                                <Icon icon="lucide:log-out" width="21.28" height="21.28" />
                                <span className='mx-2'>Logout</span>
                            </Nav.Link>
                        </div>
                        {/* User Info in Sidebar Footer */}
                        <div className='usersidenavfooter d-flex align-items-center px-5 pb-5'>
                            <div className='uservatar d-inline-block'>
                                <img
                                    src={userfooter}
                                    alt="useravatar"
                                />
                            </div>
                            <div className='userinfo d-inline-block'>
                                <p className='lh-sm mx-3 my-auto username'>Do Little</p>
                                <p className='lh-sm mx-3 my-auto useremail'>contactdolittle@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </Col>
                {/* Content */}
                <Col sm={9} md={10} className="content">
                    <Row className='d-flex align-items-center py-4 border-bottom border-light-subtle'>
                        <Col xs={8}>
                            <h1 className='locationheader my-auto'>1856C Agoncillo St. Malate Manila</h1>
                        </Col>
                        <Col xs={4}>
                            <Form inline className="float-right input-wrapper d-flex align-items-center w-100 border border-light-subtle">
                                <FormControl type="text" placeholder="Search..." className="mr-sm-2 inputsearch bg-transparent border border-0 w-100" />
                                <Icon icon="lucide:search" width="21.28" height="21.28" id='searchicon' className='mx-2' />
                            </Form>
                        </Col>
                    </Row>
                    <Container fluid>
                        <Row className='px-2 py-3'>
                            <Col xs={8}>
                                <Row className='pb-3'>
                                    <Col>
                                        <Form>
                                            <Form.Label className='formradiolabel'>Building Filter Room By :</Form.Label>
                                            <div className='d-inline-block px-3'>
                                                <Form.Check
                                                    inline
                                                    label="Code"
                                                    type="radio"
                                                    id="radiocode"
                                                    name="radios"
                                                    className='formradiocheck'
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Tag"
                                                    type="radio"
                                                    id="radiotag"
                                                    name="radios"
                                                    className='formradiocheck'
                                                />
                                            </div>
                                        </Form>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col className='openselectmenu'>
                                        <Dropdown className='selectmenudropdown'>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic" className='bg-transparent border border-2'>
                                                <span className='pe-5'>Open Select Menu</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#" className='selectmenus'>Select Menu 1</Dropdown.Item>
                                                <Dropdown.Item href="#" className='selectmenus'>Select Menu 2</Dropdown.Item>
                                                <Dropdown.Item href="#" className='selectmenus'>Select Menu 3</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>

                                </Row>
                            </Col>
                            <Col xs={4}>
                                {/* Add content for the right column here */}
                            </Col>
                        </Row>
                    </Container>

                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
