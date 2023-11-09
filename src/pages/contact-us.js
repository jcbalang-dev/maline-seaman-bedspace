import * as React from 'react'
import SimpleLayout from '../components/SimpleLayout'
import { Container, Row, Col } from 'react-bootstrap';
import * as styles from '../styles/contact-us.module.css'
import { Icon } from '@iconify/react'
import locationOutline from '@iconify-icons/ion/location-outline'
import telephoneIcon from '@iconify-icons/bi/telephone'

const ContactUsPage = ({ data }) => {
    return (
        <SimpleLayout>
            <region>
                <Container className={styles.contacthero1}>
                    <Row>
                        <Col md={6} className="px-5 pt-5">
                            <Row className="pb-5">
                                <Col>
                                    <Row>
                                        <Col className="d-inline-block px-1" xs={1}>
                                            <Icon icon={locationOutline} width={60} height={60} />
                                        </Col>
                                        <Col className="d-inline-block px-4" xs={11}>
                                            <p className="fs-3 lh-1 montserratbold d-inline-block">Location:</p>
                                            <p className="lh-1 opacity-75 fs-3">1856c Agoncillio Street Malate Manila</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col className="d-inline-block px-1" xs={1}>
                                            <Icon icon={telephoneIcon} width="50" height="50" rotate="90deg" />
                                        </Col>
                                        <Col className="d-inline-block px-4" xs={11}>
                                            <p className="fs-3 lh-1 montserratbold d-inline-block">Contact Number:</p>
                                            <p className="lh-1 opacity-75 fs-3">09260073532 / 09275270593</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4495256949194!2d120.98917217582044!3d14.573442477739547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c986c8f53d9b%3A0xec0007e2721da26e!2s1856c%20Agoncillo%20St%2C%20Malate%2C%20Manila%2C%201004%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693655662389!5m2!1sen!2sph"
                                width="100%" 
                                height="717" 
                                style={{ border: 0, borderRadius: '30px' }} 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </Col>
                    </Row>
                </Container>
            </region>
        </SimpleLayout>
    )
}

export default ContactUsPage