import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className={`${styles.hero2} px-5`}>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <div>
                
              </div>
            </Col>
            <Col md={6}>
              <Row className={`${styles.hero2sub1} d-flex justify-content-end`}>
                <Col xs={11} className="py-2">
                  <h1>Commitment to Sustainability</h1>
                </Col>
                <Col xs={1} className={`${styles.lines} rounded-pill px-1`}></Col>
              </Row>
              <Row className={`${styles.hero2sub2} text-end`}>
                <Col xs={12}>
                  <h2 className="josefinsitalic">We are committed to responsible business practices, including energy efficiency, waste reduction, and the use of eco-friendly products whenever possible.</h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="d-flex justify-content-center">
          
        </Container>
      </section>

      <section className={`${styles.hero2} px-5`}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <Row className={`${styles.hero2sub1}`}>
              <Col xs={2} className={`${styles.lines} rounded-pill px-1`}></Col>
              <Col xs={7} className="py-2">
                <h1>Social Media</h1>
              </Col>
            </Row>
            <Row className="py-5">
              <Col className="d-flex justify-content-center align-items-center">
                <h2 className="josefinsitalic text-center w-50">Your home ashore awaits at Maline's Bedspace Seaman's Dormitory & Transient Inn. Discover comfort, community, and convenience tailored exclusively for seafarers. 🏠⚓ #SeafarersHaven #HomeAwayFromHome</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                  <div className="d-flex justify-content-center align-items-center">
                  
                    <span className="px-3 pt-3">
                      <h2 className="josefinsitalic text-dark">/Malines Transient</h2>
                    </span>
                  </div>
                </a>
              </Col>
            </Row>
            <Row className="py-5">
              <Col>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col md={3}>
                    <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                    
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                      
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                      
                    </a>
                  </Col>
                  <Col md={3}>
                    <a href="https://www.facebook.com/lynsbedspace09260073532" target="_blank" rel="noreferrer">
                     
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}