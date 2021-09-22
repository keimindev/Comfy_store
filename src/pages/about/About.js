import React from 'react'
import PageHero from '../../components/pageHero/PageHero'
import './about.css';

function About() {
    return (
        <div className="about-container">
            <PageHero title="about" />
            <div className="about section section-center">
                <div className="img"><img src="/assets/about.jpg" alt="nice sofa"/></div>
                <article>
                    <div className="title">
                        <h2>Our Story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget 
                        est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean 
                        sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac 
                        auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas 
                        integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. 
                        Pulvinar elementum integer enim neque volutpat ac.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default About
