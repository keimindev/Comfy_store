import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

function Hero() {
    return (
        <div className="section-center hero-container">
            <article className="content">
                <h1>design your <br/>
                comfort Zone</h1>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <Link to='/products'>
                    <button className="btn hero-btn">Shop now</button>
                </Link>
            </article>
            <article className="img-container">
                <img src="/assets/main.jpg" alt="Livingroom" className="main1-img"/>
            </article>
        </div>
    )
}

export default Hero
