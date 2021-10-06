import React, { useState } from 'react'
import { Twitter } from '@material-ui/icons'
import './login.css'

const Login = () => {
    const [account, setAccount] = useState(true);
    const toggleBtn = () => { setAccount(prev => !prev)}
    return (
        <div className="section-center">
            <div className="login-content">
                <form className="login-form">
                    <img src="./assets/comfy-logo.png" alt="logo"/>
                    <input type="email" placeholder="example@example.com" className="login-input"/>
                    <input type="password" className="login-input" />
                    <input type="submit" className="login-btn" value={account ? "Login" : "Create Account" } />
                    {account ? (
                       <h5>If you don't have account, <span onClick={toggleBtn}>Click here</span></h5>
                    ) : <h5>If you have an account, <span onClick={toggleBtn}>Click here</span></h5>}
                   
                    <hr />
                    <div className="auth-btns">
                    <button type="submit"><span>Goggle</span></button>
                    <button type="submit"><Twitter className="icon"/><span>Twitter</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
