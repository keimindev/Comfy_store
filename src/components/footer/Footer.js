import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <h5>
                &copy; {new Date().getFullYear()}
                <span>Comfort</span>
            </h5>
            <h5>All rights reserved</h5>
        </div>
    )
}

export default Footer
