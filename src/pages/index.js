import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container} from 'react-bootstrap'
import logo from '../images/msdwebsite/logo.png'
import bgmain from '../images/msdwebsite/bg.png'
import { Icon } from '@iconify/react'

const Home = () => {
  const bgStyle = {
    backgroundImage:`url(${bgmain})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const handleServicesMouseEnter = () => {
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesHovered(false);
  };

  return (
    <div className={bgStyle}>
      <Container>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="index.js">
            <img src={logo} alt="MSD Logo" loading="lazy" className="img-fluid logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarButtonsExample" aria-label="Toggle navigation">
            <Icon icon="lucide:menu" width="24" height="24" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarButtonsExample">
            <Nav className="me-auto">
              <Nav.Link href="index.js" className='text-white mx-4 circularmed'>Home</Nav.Link>
              <Nav.Link href="about.js" className='text-white mx-4 circularmed'>About</Nav.Link>
              <Nav.Link
                href="services.js"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                className='text-white mx-4 circularmed'
              >
                Services
                <Icon
                  icon={isServicesHovered ? 'lucide:chevron-up' : 'lucide:chevron-down'}
                  width="24"
                  height="24"
                />
                <Nav className="sub-nav">
                  <Nav.Link href="single-bed-room.js" className='rounded circularmed'>Single Bedroom</Nav.Link>
                  <Nav.Link href="double-deck-bed-room.js" className='rounded circularmed'>Double-Deck Bedroom</Nav.Link>
                </Nav>
              </Nav.Link>
              <Nav.Link href="contactus.js" className='text-white mx-4 circularmed'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Home;
