import React from 'react'
import { Link } from 'react-router-dom'
import './error.css';

function Error() {
    return (
        <div className="error-container">
            <section>
            <h1>404</h1>
            <h3>Sorry, the page you tried cannot be found</h3>
            <Link to="/" className="back-btn">
                <button>back home</button>
            </Link>
            </section>
        </div>
    )
}

export default Error
