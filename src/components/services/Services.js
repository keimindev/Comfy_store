import React from 'react'
import { services } from '../../utils'
import './services.css'

function Services() {
    return (
        <div className="service-container">
            <div className="section-center">
            <div className="service-top">
                <div className="title">
                    <h2>Custom Furniture <br/>
                    Built Only For You</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="service-bottom">
                <ul>
            {services.map( (service) => {
                const { id, icon, title, desc } = service
                return(
                    <>
                    <li key={id}>
                    <div className="service-icon">{icon}</div>
                    <div className="service-title">{title}</div>
                    <div className="service-desc">{desc}</div>
                    </li>
                    </>
                )
            })}
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Services
