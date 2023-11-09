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
          <Col md={3} className="justify-content-md-center">
            <Link to='/'>
              <StaticImage
                src='../images/logo.png'
                alt='Logo'
                placeholder='blurred'
                className='img-fluid'
              />
            </Link>
          </Col>
          <Col md={3}>
            <ListGroup as='ul' variant='flush'>
              <ListGroup.Item as='li' className="list-unstyled bg-transparent border border-0">
                <h5 className={`${styles.lexendreg} fw-bold`}>Developer</h5>
              </ListGroup.Item>
              <ListGroup.Item as='li' className={`${styles.lexendlight} list-unstyled bg-transparent`}>
                <a href='https://www.facebook.com/DoLittleStudio' target='_blank' rel='noopener noreferrer' className='fs-6 text-white'>
                  @DolittleStudio
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item as="li" className="list-unstyled bg-transparent border border-0">
              <h5 className={`${styles.lexendreg} fw-bold`}>Contact Us</h5>
              </ListGroup.Item>
              <ListGroup.Item as="li" className={`${styles.lexendlight} list-unstyled bg-transparent border border-0`}>
                09260073532
              </ListGroup.Item>
              <ListGroup.Item as="li" className={`${styles.lexendlight} list-unstyled bg-transparent border border-0 lh-1`}>
                09275270593
              </ListGroup.Item>
              <ListGroup.Item as="li" className={`${styles.lexendlight} pt-2 list-unstyled bg-transparent border border-0 mt-3`}>
                1856c Agoncillio Street Malate Manila
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup as="ul" variant="flush">
              <ListGroup.Item as="li" className={`list-unstyled bg-transparent border border-0`}>
                <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel='noopener noreferrer'
                  className="d-flex justify-content-center align-items-center link-underline-opacity-0 link-underline">
                  <Icon icon={akarFacebookFill} width="26" height="26" color='white' />
                  <span className="px-3 mt-2">
                    <h6 className={`${styles.josefinsitalic} text-white`}>/Malines Transient</h6>
                  </span>
                </a>
              </ListGroup.Item>
              <ListGroup.Item as="li" className='list-unstyled bg-transparent border border-0'>
                <Link to="/projects"></Link>
                <a href="/projects" className="d-flex justify-content-center align-items-center link-underline-opacity-0 link-underline">
                  <Icon icon={mdiAccoutGroup} width="26" height="26" color='white' />
                  <span className="px-3 mt-3">
                    <h6 className={`${styles.josefinsitalic} text-white`}>Malines Transient</h6>
                  </span>
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row className='mt-5 pt-5'>
          <p className={`${styles.lexendreg} text-center text-white`}>© Copyright <span>{currentYear}</span>. All Rights Reserved. DolittleStudio</p>
        </Row>
      </Container>
    </footer>
  )
}
