import React from 'react'
import Featured from '../../components/featured/Featured'
import Hero from '../../components/hero/Hero'
import Services from '../../components/services/Services'
import Contact from '../../components/contact/Contact'

function Home() {
    return (
        <>
        <Hero/>
        <Featured/>
        <Services/>
        <Contact />
        </>
    )
}

export default Home
