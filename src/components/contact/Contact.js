import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="section-center contact-container">
            <div className="left-box">
            <h3>Join our newsletter and get 20% off</h3>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <form 
            className="right-box" 
            action='https://formspree.io/f/xknkykrv'
            method='POST'>
                <input type="email" placeholder='example@gmail.com' name='_replyto'/>
                <button type="submit" className="btn submit-btn">Subscribe</button>
            </form>
           
        </div>
    )
}

export default Contact
