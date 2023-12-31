import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Navbar, Col, Nav } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";

import Logo from "../Logo";

const NavigationMenu = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const handleServicesMouseEnter = () => {
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesHovered(false);
  };

  return (
    <header>
      <Container>
        <Row>
          <Col md={12}>
            <Navbar expand="lg" variant="light" className="shadow-none">
              <Col md={1} className="px-2">
                <Navbar.Brand as={Link} href="/">
                  <Logo />
                </Navbar.Brand>
              </Col>
              <Col md={4} className="px-2">
                <big className="w-25 text-white">
                  MALINE'S BEDSPACE SEAMAN'S DORMITORY & TRANSIENT INN
                </big>
              </Col>
              <Col md={7}>
                <Navbar.Toggle aria-controls="navbarButtons" />
                <Navbar.Collapse id="navbarButtons" className="px-2">
                  <Nav className="ms-auto mb-lg-0 circularmed">
                    <Nav.Item className="px-4">
                      <Nav.Link as={Link} href="/" className="text-white">
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="px-4">
                      <Nav.Link as={Link} href="/about" className="text-white">
                        About
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav-item dropdown px-4">
                      <Nav.Link
                        as={Link}
                        href="/services"
                        className="text-white"
                        onMouseEnter={handleServicesMouseEnter}
                        onMouseLeave={handleServicesMouseLeave}
                      >
                        Services
                        {isServicesHovered ? (
                          <ChevronUp width={24} height={24} />
                        ) : (
                          <ChevronDown width={24} height={24} />
                        )}
                        <Nav className="sub-nav">
                          <Nav.Link as={Link} href="/services/single-bedroom">
                            Single Bedroom
                          </Nav.Link>
                          <Nav.Link
                            as={Link}
                            href="/services/double-deck-bedroom"
                          >
                            Double-Deck Bedroom
                          </Nav.Link>
                        </Nav>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="px-4">
                      <Nav.Link
                        as={Link}
                        href="/contact-us/"
                        className="text-white"
                      >
                        Contact Us
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavigationMenu;
