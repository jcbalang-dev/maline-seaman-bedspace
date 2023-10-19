import * as React from 'react'
import { Container } from 'react-bootstrap'

const Hero = () => {
    return (
        <Container>
            <div class="row ">
                <div class="col-md-5">
                    <div class="hero1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <p class="josefinsbold">Navigating Comfort:</p>
                        <span class="josefinslight">Maline's Bedspace Seaman's Dormitory & Transient Inn</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero