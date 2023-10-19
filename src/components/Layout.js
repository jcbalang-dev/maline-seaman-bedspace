import * as React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

export default function Layout({children}){
    return (
        <div className="layout">
            <Header />
            <Hero />
            <div className='content'>
                { children }
            </div>
            <Footer />
        </div>
    )
}