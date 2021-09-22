import React from 'react'
import { Link } from 'react-router-dom'
import './pagehero.css'

function PageHero( {title}) {
    return (
        <div className="pagehero-container">
            <h4>
                <Link to="/">Home</Link> / {title}
            </h4>
        </div>
    )
}

export default PageHero
