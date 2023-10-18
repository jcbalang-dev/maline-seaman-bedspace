import * as React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'
import HeaderBackground from '../images/bg.jpg'

const headerStyle = {
    backgroundImage: `url(${HeaderBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '50em'
}

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <header style={headerStyle}>
            <Navbar bg="transparent" variant="light" expand="lg" className='shadow-none'>
                <Container fluid>
                    <Navbar.Brand href='/' className='me2'>
                        <StaticImage 
                            src='../images/logo.png'
                            alt={ title }
                            loading='lazy'
                            class='img-fluid'
                            height="131"
                            width="132"
                        />
                    </Navbar.Brand>
                    <Button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown href="/services" title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/services/singlebed">Single Bedroom</NavDropdown.Item>
                                <NavDropdown.Item href="/services/doubledeck">Double Deck Bedroom</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
