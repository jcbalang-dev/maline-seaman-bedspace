import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Dropdown, Button, Modal } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import logo from '/src/images/logo.png';
import userfooter from '/src/images/user.png';
import '/src/styles/global.css';
import defaultImage from '/src/images/logo.png';

const MyVerticallyCenteredModal = (props) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modalsettings'
    >
      <Modal.Header closeButton className='border border-0 pb-0'>
        <Modal.Title id="contained-modal-title-vcenter modalsettingstitle">
          Welcome user
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='pt-0 modalsettingsbody'>
        <small className='modalsettingseditpro'>Edit your profile quickly</small>
        <div className='pt-4'>
          <Row>
            <Col className='modalsettingsinput'>
              <div className='form-group'>
                <label htmlFor='adminName' className='inputSettingsLabel'>Admin Name</label>
                <input type='text' className='form-control inputSettingsLabel mb-2' id='adminName' placeholder='Contact DoLittleStudio' />
              </div>
              <div className='form-group mt-3'>
                <label htmlFor='password' className='inputSettingsLabel'>Change Password</label>
                <input type='password' className='form-control inputSettingsLabel mb-2' id='password' placeholder='********' />
              </div>
              <div className='form-group mt-3'>
                <label htmlFor='confirmPassword' className='inputSettingsLabel'>Retype Password</label>
                <input type='password' className='form-control inputSettingsLabel mb-2' id='confirmPassword' placeholder='********' />
              </div>
            </Col>
            <Col className='modalsettingsimage'>
              <label htmlFor='changephoto' className='inputSettingsLabel'>Change Photo</label>
              <div className="upload-image-container">
                <label htmlFor="profileImage" className="upload-image-label">
                  {image ? (
                    <img src={image} alt="Uploaded" className="img-fluid fixed-imageSettings-size bg-secondary" />
                  ) : (
                    <img src={defaultImage} alt="Default" className="img-fluid fixed-imageSettings-size bg-secondary" />
                  )}
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer className='border border-0 pb-4'>
        <Button className='btn modalsettingsconfirm me-4' onClick={props.onHide}>Confirm</Button>
        <Button className='btn modalsettingscancel' onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [modalShowSettings, setModalShowSettings] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container fluid>
      <Row className='position-relative'>
        {/* Sidebar */}
        <Col sm={3} md={2} className='min-vh-100 p-0 position-relative d-flex justify-content-between'>
          <Navbar className='flex-column position-relative'>
            {/* Logo and Brand */}
            <Navbar.Brand className='d-flex align-items-center my-3'>
              <img src={logo} width='100' className='d-inline-block align-top mx-4' alt='Logo' fluid />
              <span className='my-auto fw-medium lh-sm text-wrap mx-3 homelogoname'>Malyns Transient House</span>
            </Navbar.Brand>
            {/* Sidebar Navigation */}
            <Nav className='flex-column w-100'>
              <Nav.Link href='#' className='px-5 menuitemname d-flex align-items-center'>
                <Icon icon='lucide:home' width='21.28' height='21.28' />
                <span className='mx-2'>Home</span>
              </Nav.Link>
              <Nav.Link href='#' className='px-5 menuitemname d-flex align-items-center'>
                <Icon icon='lucide:layout-dashboard' width='21.28' height='21.28' />
                <span className='mx-2'>Dashboard</span>
              </Nav.Link>
              {/* Services Menu */}
              <div className='servicesmenu px-5 d-flex align-items-center justify-content-between' onClick={toggleMenu}>
                <div className='d-flex align-items-center'>
                  <Icon icon='lucide:box' width='21.28' height='21.28' />
                  <span className='mx-2'>Services</span>
                </div>
                <Icon icon={isMenuOpen ? 'akar-icons:chevron-up' : 'akar-icons:chevron-down'} width='16' height='16' />
              </div>
              {/* Services Submenu (conditionally rendered) */}
              {isMenuOpen && (
                <div className='servicesmenu-position'>
                  <Nav.Link href='#' className='servicessubmenu d-flex align-items-center'><span>Available Pending</span></Nav.Link>
                  <Nav.Link href='#' className='servicessubmenu d-flex align-items-center'><span>On-Going</span></Nav.Link>
                  <Nav.Link href='#' className='servicessubmenu d-flex align-items-center'><span>Out-Going</span></Nav.Link>
                  <Nav.Link href='#' className='servicessubmenu d-flex align-items-center'><span>Cancelled</span></Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar>
          {/* Sidebar Footer */}
          <div className='footer position-absolute w-100 bottom-0 left-0'>
            <div className='divider position-relative w-75'></div>
            {/* Sidebar Footer Navigation */}
            <div className='sidenav-footer py-5'>
              <Nav.Link href='#' className='px-5 menuitemname d-flex align-items-center'>
                <Icon icon='lucide:message-square' width='21.28' height='21.28' />
                <span className='mx-2'>Chat</span>
              </Nav.Link>
              <Nav.Link href='#' className='px-5 menuitemname d-flex align-items-center' onClick={() => setModalShowSettings(true)}>
                <Icon icon='lucide:settings' width='21.28' height='21.28' />
                <span className='mx-2'>Settings</span>
              </Nav.Link>
              <MyVerticallyCenteredModal
                show={modalShowSettings}
                onHide={() => setModalShowSettings(false)}
              />
              <Nav.Link href='#' className='px-5 menuitemname d-flex align-items-center'>
                <Icon icon='lucide:log-out' width='21.28' height='21.28' />
                <span className='mx-2'>Logout</span>
              </Nav.Link>
            </div>
            {/* User Info in Sidebar Footer */}
            <div className='usersidenavfooter d-flex align-items-center px-5 pb-5'>
              <div className='uservatar d-inline-block'>
                <img src={userfooter} alt='useravatar' />
              </div>
              <div className='userinfo d-inline-block'>
                <p className='lh-sm mx-3 my-auto username'>Do Little</p>
                <p className='lh-sm mx-3 my-auto useremail'>contactdolittle@gmail.com</p>
              </div>
            </div>
          </div>
        </Col>
        {/* Content */}
        <Col sm={9} md={10} className='content position-relative min-vh-100 d-flex flex-column'>
          <Row className='d-flex align-items-center py-4 border-bottom border-light-subtle'>
            <Col xs={8}>
              <h1 className='locationheader my-auto'>1856C Agoncillo St. Malate Manila</h1>
            </Col>
            <Col xs={4}>
              <Form inline className='float-right input-wrapper d-flex align-items-center w-100 border border-light-subtle'>
                <FormControl type='text' placeholder='Search...' className='mr-sm-2 inputsearch bg-transparent border border-0 w-100' />
                <Icon icon='lucide:search' width='21.28' height='21.28' id='searchicon' className='mx-2' />
              </Form>
            </Col>
          </Row>
          <Container fluid className='pb-3'>
            <Row className='px-2 py-3'>
              <Col xs={8}>
                <Row className='pb-3'>
                  <Col>
                    <Form>
                      <Form.Label className='formradiolabel'>Building Filter Room By :</Form.Label>
                      <div className='d-inline-block px-3'>
                        <Form.Check
                          inline
                          label='Code'
                          type='radio'
                          id='radiocode'
                          name='radios'
                          className='formradiocheck'
                        />
                        <Form.Check
                          inline
                          label='Tag'
                          type='radio'
                          id='radiotag'
                          name='radios'
                          className='formradiocheck'
                        />
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col className='openselectmenu'>
                    <Dropdown className='selectmenudropdown'>
                      <Dropdown.Toggle variant='light' id='dropdown-basic' className='bg-transparent border border-2'>
                        <span className='pe-5'>Open Select Menu</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href='#' className='selectmenus'>Select Menu 1</Dropdown.Item>
                        <Dropdown.Item href='#' className='selectmenus'>Select Menu 2</Dropdown.Item>
                        <Dropdown.Item href='#' className='selectmenus'>Select Menu 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </Col>
              <Col xs={4}>
                <Row className='px-3'>
                  <Col>
                    <Button variant='primary' className='chkinoutbtn me-4'>Check In</Button>
                    <Button variant='primary' className='chkinoutbtn'>Check Out</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Row className='flex-grow-1'>
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant='primary' className='dashavailpending w-100'>Available Pending</Button>
            </Col>
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant='primary' className='dashongoing w-100'><Icon icon='lucide:alarm-clock' width='24' height='24' className='me-2'/>On- Going</Button>
            </Col>
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant='primary' className='dashoutgoing w-100'><Icon icon='lucide:help-circle' width='24' height='24' className='me-2'/>Out- Going</Button>
            </Col>
            <Col className='me-1 dashcontentcol h-100 px-3 pt-4'>
              <Button variant='primary' className='dashout w-100'><Icon icon='lucide:shopping-cart' width='24' height='24' hFlip={true} className='me-2'/>Out</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
