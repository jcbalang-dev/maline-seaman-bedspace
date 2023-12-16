import * as React from "react";
import { useState } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { List, ChevronUp, ChevronDown } from "react-bootstrap-icons";

import HeaderBackground from "/public/images/website/bg.png";
import { Image } from "next/image";

import Logo from "../Logo";
import Hero from "../Hero";
import Social from "../Social";

const headerStyle = {
  backgroundImage: `url(${HeaderBackground.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Header = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const handleServicesMouseEnter = () => {
    setIsServicesHovered(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesHovered(false);
  };

  return (
    <header style={headerStyle}>
      <Container>
        <Navbar expand="lg" variant="light">
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarButtonsExample"
            aria-label="Toggle navigation"
          >
            <List width="24" height="24" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarButtonsExample">
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-white mx-4 circularmed">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-white mx-4 circularmed">
                About
              </Nav.Link>
              <Nav.Link
                href="/services"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
                className="text-white mx-4 circularmed"
              >
                Services
                {isServicesHovered ? (
                  <ChevronUp width={24} height={24} />
                ) : (
                  <ChevronDown width={24} height={24} />
                )}
                <Nav className="sub-nav">
                  <Nav.Link
                    href="/services/single-bedroom"
                    className="rounded circularmed"
                  >
                    Single Bedroom
                  </Nav.Link>
                  <Nav.Link
                    href="/services/double-deck-bedroom"
                    className="rounded circularmed"
                  >
                    Double-Deck Bedroom
                  </Nav.Link>
                </Nav>
              </Nav.Link>
              <Nav.Link
                href="/contact-us/"
                className="text-white mx-4 circularmed"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Hero />
      </Container>
      <Social />
    </header>
  );
};

export default Header;
