import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Dropdown, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
<<<<<<< HEAD
import * as styles from '../../styles/projects.module.css'
=======
>>>>>>> parent of d30a832 (test)
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
<<<<<<< HEAD
              <span className={`my-auto fw-medium lh-sm text-wrap mx-3 ${styles.homelogoname}`}>Malyns Transient House</span>
            </Navbar.Brand>
            {/* Sidebar Navigation */}
            <Nav className="flex-column w-100">
              <Nav.Link href="#" className={`px-5 ${styles.menuitemname} d-flex align-items-center`}>
                <Icon icon="lucide:home" width="21.28" height="21.28" />
                <span className='mx-2'>Home</span>
              </Nav.Link>
              <Nav.Link href="#" className={`px-5 ${styles.menuitemname} d-flex align-items-center`}>
=======
              <span className='my-auto fw-medium lh-sm text-wrap mx-3 homelogoname'>Malyns Transient House</span>
            </Navbar.Brand>
            {/* Sidebar Navigation */}
            <Nav className="flex-column w-100">
              <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'>
                <Icon icon="lucide:home" width="21.28" height="21.28" />
                <span className='mx-2'>Home</span>
              </Nav.Link>
              <Nav.Link href="#" className='px-5 menuitemname d-flex align-items-center'>
>>>>>>> parent of d30a832 (test)
                <Icon icon="lucide:layout-dashboard" width="21.28" height="21.28" />
                <span className='mx-2'>Dashboard</span>
              </Nav.Link>
              {/* Services Menu */}
<<<<<<< HEAD
              <button className={`${styles.servicesmenu} px-5 d-flex align-items-center justify-content-between`} onClick={toggleMenu} onKeyDown={toggleMenu}>
=======
              <div className='servicesmenu px-5 d-flex align-items-center justify-content-between' onClick={toggleMenu}>
>>>>>>> parent of d30a832 (test)
                <div className="d-flex align-items-center">
                  <Icon icon="lucide:box" width="21.28" height="21.28" />
                  <span className='mx-2'>Services</span>
                </div>
                <Icon icon={isMenuOpen ? 'akar-icons:chevron-up' : 'akar-icons:chevron-down'} width="16" height="16" />
<<<<<<< HEAD
              </button>
              {/* Services Submenu (conditionally rendered) */}
              {isMenuOpen && (
                <div className={styles.servicesmenuposition}>
                  <Nav.Link href="#" className={`${styles.servicessubmenu} d-flex align-items-center`}><span>Available Pending</span></Nav.Link>
                  <Nav.Link href="#" className={`${styles.servicessubmenu} d-flex align-items-center`}><span>On-Going</span></Nav.Link>
                  <Nav.Link href="#" className={`${styles.servicessubmenu} d-flex align-items-center`}><span>Out-Going</span></Nav.Link>
                  <Nav.Link href="#" className={`${styles.servicessubmenu} d-flex align-items-center`}><span>Cancelled</span></Nav.Link>
=======
              </div>
              {/* Services Submenu (conditionally rendered) */}
              {isMenuOpen && (
                <div className="servicesmenu-position">
                  <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>Available Pending</span></Nav.Link>
                  <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>On-Going</span></Nav.Link>
                  <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>Out-Going</span></Nav.Link>
                  <Nav.Link href="#" className='servicessubmenu d-flex align-items-center'><span>Cancelled</span></Nav.Link>
>>>>>>> parent of d30a832 (test)
                </div>
              )}
            </Nav>
          </Navbar>
          {/* Sidebar Footer */}
          <div className='footer position-absolute w-100 bottom-0 left-0'>
<<<<<<< HEAD
            <div className={`${styles.divider} position-relative w-75`}></div>
            {/* Sidebar Footer Navigation */}
            <div className='sidenav-footer py-5'>
              <Nav.Link href="#" className={`px-5 ${styles.menuitemname} d-flex align-items-center`}>
                <Icon icon="lucide:message-square" width="21.28" height="21.28" />
                <span className='mx-2'>Chat</span>
              </Nav.Link>
              <Nav.Link href="#" className={`px-5 ${styles.menuitemname} d-flex align-items-center`}>
                <Icon icon="lucide:settings" width="21.28" height="21.28" />
                <span className='mx-2'>Settings</span>
              </Nav.Link>
              <Nav.Link href="#" className={`px-5 ${styles.menuitemname} d-flex align-items-center`}>
=======
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
>>>>>>> parent of d30a832 (test)
                <Icon icon="lucide:log-out" width="21.28" height="21.28" />
                <span className='mx-2'>Logout</span>
              </Nav.Link>
            </div>
            {/* User Info in Sidebar Footer */}
<<<<<<< HEAD
            <div className={`d-flex align-items-center px-5 pb-5`}>
=======
            <div className='usersidenavfooter d-flex align-items-center px-5 pb-5'>
>>>>>>> parent of d30a832 (test)
              <div className='uservatar d-inline-block'>
                <img
                  src={userfooter}
                  alt="useravatar"
                />
              </div>
              <div className='userinfo d-inline-block'>
<<<<<<< HEAD
                <p className={`lh-sm mx-3 my-auto ${styles.username}`}>Do Little</p>
                <p className={`lh-sm mx-3 my-auto ${styles.useremail}`}>contactdolittle@gmail.com</p>
=======
                <p className='lh-sm mx-3 my-auto username'>Do Little</p>
                <p className='lh-sm mx-3 my-auto useremail'>contactdolittle@gmail.com</p>
>>>>>>> parent of d30a832 (test)
              </div>
            </div>
          </div>
        </Col>
        {/* Content */}
        <Col sm={9} md={10} className="content position-relative min-vh-100 d-flex flex-column">
          <Row className='d-flex align-items-center py-4 border-bottom border-light-subtle'>
            <Col xs={8}>
<<<<<<< HEAD
              <h1 className={`${styles.locationheader} my-auto`}>1856C Agoncillo St. Malate Manila</h1>
            </Col>
            <Col xs={4}>
              <Form inline className="float-right input-wrapper d-flex align-items-center w-100 border border-light-subtle">
                <FormControl type="text" placeholder="Search..." className={`mr-sm-2 ${styles.inputsearch} bg-transparent border border-0 w-100`} />
=======
              <h1 className='locationheader my-auto'>1856C Agoncillo St. Malate Manila</h1>
            </Col>
            <Col xs={4}>
              <Form inline className="float-right input-wrapper d-flex align-items-center w-100 border border-light-subtle">
                <FormControl type="text" placeholder="Search..." className="mr-sm-2 inputsearch bg-transparent border border-0 w-100" />
>>>>>>> parent of d30a832 (test)
                <Icon icon="lucide:search" width="21.28" height="21.28" id='searchicon' className='mx-2' />
              </Form>
            </Col>
          </Row>
          <Container fluid className='pb-3'>
            <Row className='px-2 py-3'>
              <Col xs={8}>
                <Row className='pb-3'>
                  <Col>
                    <Form>
<<<<<<< HEAD
                      <Form.Label className={styles.formradiolabel}>Building Filter Room By :</Form.Label>
=======
                      <Form.Label className='formradiolabel'>Building Filter Room By :</Form.Label>
>>>>>>> parent of d30a832 (test)
                      <div className='d-inline-block px-3'>
                        <Form.Check
                          inline
                          label="Code"
                          type="radio"
                          id="radiocode"
                          name="radios"
<<<<<<< HEAD
                          className={styles.formradiocheck}
=======
                          className='formradiocheck'
>>>>>>> parent of d30a832 (test)
                        />
                        <Form.Check
                          inline
                          label="Tag"
                          type="radio"
                          id="radiotag"
                          name="radios"
<<<<<<< HEAD
                          className={styles.formradiocheck}
=======
                          className='formradiocheck'
>>>>>>> parent of d30a832 (test)
                        />
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col className='openselectmenu'>
<<<<<<< HEAD
                    <Dropdown className={styles.selectmenudropdown}>
=======
                    <Dropdown className='selectmenudropdown'>
>>>>>>> parent of d30a832 (test)
                      <Dropdown.Toggle variant="light" id="dropdown-basic" className='bg-transparent border border-2'>
                        <span className='pe-5'>Open Select Menu</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
<<<<<<< HEAD
                        <Dropdown.Item href="#" className={styles.selectmenus}>Select Menu 1</Dropdown.Item>
                        <Dropdown.Item href="#" className={styles.selectmenus}>Select Menu 2</Dropdown.Item>
                        <Dropdown.Item href="#" className={styles.selectmenus}>Select Menu 3</Dropdown.Item>
=======
                        <Dropdown.Item href="#" className='selectmenus'>Select Menu 1</Dropdown.Item>
                        <Dropdown.Item href="#" className='selectmenus'>Select Menu 2</Dropdown.Item>
                        <Dropdown.Item href="#" className='selectmenus'>Select Menu 3</Dropdown.Item>
>>>>>>> parent of d30a832 (test)
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
              <Col xs={4}>
                <Row className='px-3'>
                  <Col>
<<<<<<< HEAD
                    <Button variant="primary" className={`${styles.chkinoutbtn} me-4`}>Check In</Button>
                    <Button variant="primary" className={styles.chkinoutbtn}>Check Out</Button>
=======
                    <Button variant="primary" className='chkinoutbtn me-4'>Check In</Button>
                    <Button variant="primary" className='chkinoutbtn'>Check Out</Button>
>>>>>>> parent of d30a832 (test)
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Row className='flex-grow-1'>
<<<<<<< HEAD
            <Col className={`me-1 ${styles.dashcontentcol} h-100 px-3 pt-4`}>
              <Button variant="primary" className={`${styles.dashavailpending} w-100`}>Available Pending</Button>
            </Col>
            <Col className={`me-1 ${styles.dashcontentcol} h-100 px-3 pt-4`}>
              <Button variant="primary" className={`${styles.dashongoing} w-100`}><Icon icon="lucide:alarm-clock" width="24" height="24" className='me-2'/>On- Going</Button>
            </Col>
            <Col className={`me-1 ${styles.dashcontentcol} h-100 px-3 pt-4`}>
              <Button variant="primary" className={`${styles.dashoutgoing} w-100`}><Icon icon="lucide:help-circle" width="24" height="24" className='me-2'/>Out- Going</Button>
            </Col>
            <Col className={`me-1 ${styles.dashcontentcol} h-100 px-3 pt-4`}>
              <Button variant="primary" className={`${styles.dashout} w-100`}><Icon icon="lucide:shopping-cart" width="24" height="24" hFlip={true} className='me-2'/>Out</Button>
=======
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant="primary" className='dashavailpending w-100'>Available Pending</Button>
            </Col>
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant="primary" className='dashongoing w-100'><Icon icon="lucide:alarm-clock" width="24" height="24" className='me-2'/>On- Going</Button>
            </Col>
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant="primary" className='dashoutgoing w-100'><Icon icon="lucide:help-circle" width="24" height="24" className='me-2'/>Out- Going</Button>
            </Col>
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant="primary" className='dashout w-100'><Icon icon="lucide:shopping-cart" width="24" height="24" hFlip={true} className='me-2'/>Out</Button>
>>>>>>> parent of d30a832 (test)
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
