import React, { useState } from 'react'
import { authService, firebaseInstance} from '../../firebase'
import { Twitter } from '@material-ui/icons'
import { useAuthContext } from '../../context/AuthContext'
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState(true);
    const [error, setError] = useState("");
    const toggleBtn = () => { setAccount(prev => !prev)}

    const onChange = (e) => {
        const { target : {name, value}} = e;
        if(name === "email"){
            setEmail(value)
        }else if(name === "password"){
            setPassword(value)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        try{  
        let data;
          if(account){
            data =await authService.createUserWithEmailAndPassword(email, password)
          }else {
            data = await authService.signInWithEmailAndPassword(email,password)

          }
        } catch(error){
          setError(error.message)
        }
          
    };
    
    const onGoogleClick = async (event) => {
        const {target:{name}, } = event;
        let provider;
        if(name === "google"){
          provider = new firebaseInstance.auth.GoogleAuthProvider();
          authService.signInWithPopup(provider);
        }
      }

      const onTwitterClick = async (event) => {
        const {target:{name}, } = event;
        let provider;
        if(name ==="twitter"){
          provider = new firebaseInstance.auth.TwitterAuthProvider();
          authService.signInWithRedirect(provider).then((user) => { console.log(user)});
        }
      }
  

    return (
        <div className="section-center">
            <div className="login-content">
                <form className="login-form" onSubmit={onSubmit}>
                    <img src="./assets/comfy-logo.png" alt="logo"/>
                    <input 
                    type="email"
                    name="email" 
                    placeholder="example@example.com" 
                    className="login-input"
                    onChange={onChange}
                    />
                    <input 
                    type="password" 
                    name="password" 
                    className="login-input" 
                    onChange={onChange} 
                    />
                    <input type="submit" className="login-btn" value={account ? "Login" : "Create Account" }/>
                    {account ? (
                       <h5>If you don't have account, <span onClick={toggleBtn}>Click here</span></h5>
                    ) : <h5>If you have an account, <span onClick={toggleBtn}>Click here</span></h5>}
                   
                    <hr />
                    <div className="auth-btns">
                    <button type="button" 
                    name="google"
                    onClick={onGoogleClick}><span>continue with Goggle</span></button>
                    <button type="button" 
                    name="twitter"
                    onClick={onTwitterClick}><span>continue with Twitter</span><Twitter className="icon"/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
