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
                return(
                    <>
                    <li key={service.id}>
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-title">{service.title}</div>
                    <div className="service-desc">{service.desc}</div>
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
