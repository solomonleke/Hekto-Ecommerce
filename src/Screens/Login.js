import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'

export default function Login() {

    
    return (
        <div> 
        <Nav/>

        <Header
        title = "My account "
    
        />
        <div className="login">
            
            <h4 style={{textAlign: "center"}} id="login-txt">Login</h4>
            <p style={{textAlign: "center"}} className="login-txt mb-4">Please login using account details below</p>
            
            <input className='login-input ' type="email" placeholder="Email address" /> <br /> <br />
            <input className='login-input' type="password" placeholder="Password" />
            <p className="login-txt mt-4 mb-4">Forgot your password?</p>
            <button className='login-btn' style={{color: "white"}}>Sign in</button>
            <p className="login-txt mt-4" style={{textAlign: "center"}}>Don’t have an Account? <Link to="/register" className="form-link"> Create account</Link></p>
        </div>

        <PreFooter/>
       
    </div>
    )
}
