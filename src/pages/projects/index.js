import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/styles/global.css'

import { Container, Row, Col, Image } from 'react-bootstrap'
import logo from '/src/images/logo.png'

const Projects = () => {
    return (
        <>
            <div className="bg">
                <Container>
                    <Row>
                        <Col>
                            <Image src={logo} alt="logo" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Projects
