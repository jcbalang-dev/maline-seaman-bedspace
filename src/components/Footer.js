import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Icon } from '@iconify/react'
import mdiAccoutGroup from '@iconify/icons-mdi/account-group'
import akarFacebookFill from '@iconify-icons/akar-icons/facebook-fill'
import * as styles from '../styles/footer.module.css'

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();
  
  console.log(data)

  return (
    <footer>
      <Container className={styles.container}>
        <Row className={styles.footersub1}>
          <Col md="3" className="justify-content-md-center">
            <Link to='/'>
              <StaticImage 
                src='../images/logo.png'
                alt='Logo'
                placeholder='blurred'
                class='img-fluid'
              />
            </Link>
          </Col>
          <Col md="3">
            <h5 className={`${styles.tradeext} fw-bold`}>Developer</h5>
            <ListGroup as='ul' variant='flush'>
              <ListGroup.Item as='li' className={`${styles.lexendreg} list-unstyled`}>
              <a href='https://www.facebook.com/DoLittleStudio' target='_blank' rel='noopener noreferrer'>
                @DolittleStudio
              </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="3">
            <h5 class="tradeext fw-bold">Contact Us</h5>
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item as="li" className={`${styles.lexendlight} list-unstyled`}>
                09260073532
              </ListGroup.Item>
              <ListGroup.Item as="li" className={`${styles.lexendlight} list-unstyled`}>
                09275270593
              </ListGroup.Item>
              <ListGroup.Item as="li" className={`${styles.lexendlight} pt-2 list-unstyled`}>
                1856c Agoncillio Street Malate Manila
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="3">
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item as="li" className={`list-unstyled`}>
                <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel='noopener noreferrer'
                  class="d-flex justify-content-center align-items-center">
                  <Icon icon={akarFacebookFill} width="26" height="26" />
                  <span class="px-3 pt-3">
                      <h6 class="josefinsitalic text-white">/Malines Transient</h6>
                  </span>
                </a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className={`list-unstyled`}>
                <Link to="/projects"></Link>
                <a href="/projects" class="d-flex justify-content-center align-items-center">
                  <Icon icon={mdiAccoutGroup} width="26" height="26" />
                  <span class="px-3 pt-3">
                      <h6 class="josefinsitalic text-white">Malines Transient</h6>
                  </span>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <p className={`${styles.lexendreg} text-center pt-5`}>© Copyright <span>{ currentYear }</span>. All Rights Reserved. DolittleStudio</p>          
        </Row>
      </Container>
    </footer>
  )
}
