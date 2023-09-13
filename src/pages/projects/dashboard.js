import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
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
                <Col sm={3} md={2} className="min-vh-100 p-0 position-relative d-flex justify-content-between">
                    <Navbar className="flex-column position-relative">
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
                        <Nav className="flex-column w-100">
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'><Icon icon="lucide:home" width="21.28" height="21.28" /><span className='mx-2'>Home</span></Nav.Link>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'><Icon icon="lucide:layout-dashboard" width="21.28" height="21.28" /><span className='mx-2'>Dashboard </span></Nav.Link>
                            <div className='servicesmenu px-5 d-flex align-items-center justify-content-between' onClick={toggleMenu}>
                                <div className="d-flex align-items-center">
                                    <Icon icon="lucide:box" width="21.28" height="21.28" />
                                    <span className='mx-2'>Services</span>
                                </div>
                                <Icon icon={isMenuOpen ? 'akar-icons:chevron-up' : 'akar-icons:chevron-down'} width="16" height="16" />
                            </div>

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

                    <div className='footer position-absolute w-100 bottom-0 left-0'>
                        <div className='divider position-relative'></div>
                        <div className='sidenav-footer py-5'>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'><Icon icon="lucide:message-square" width="21.28" height="21.28" /><span className='mx-2'>Chat</span></Nav.Link>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'><Icon icon="lucide:settings" width="21.28" height="21.28" /><span className='mx-2'>Settings</span></Nav.Link>
                            <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'><Icon icon="lucide:log-out" width="21.28" height="21.28" /><span className='mx-2'>Logout</span></Nav.Link>
                        </div>
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
            </Row>
        </Container>
    );
};

export default Dashboard;
