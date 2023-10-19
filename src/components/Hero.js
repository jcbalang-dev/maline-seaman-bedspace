import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from '../styles/home.module.css'

const Hero = () => {
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <div className={styles.hero1}>
                        <p className="josefinsbold">Navigating Comfort:</p>
                        <span className="josefinslight">Maline's Bedspace Seaman's Dormitory & Transient Inn</span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero