import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'

export default function Register() {
  return (
    <div>
    
    <Nav/>

    <Header
    title = "My account "
    />
            <div className="login">
                
                <h4 style={{textAlign: "center"}} id="login-txt">Register</h4>
                <p style={{textAlign: "center"}} className="login-txt mb-4">Please register using account details below</p>
                
                <input className='login-input ' type="email" placeholder="Email address" /> <br /> <br />
                <input className='login-input' type="password" placeholder="Password" />
                <p className="login-txt mt-4 mb-4">Forgot your password?</p>
                <button className='login-btn' style={{color: "white"}}>Sign Up</button>
                <p className="login-txt mt-4" style={{textAlign: "center"}}>Already have an Account? <Link to="/login" className="form-link"> Login</Link></p>


            </div>
          <PreFooter/>
        </div>
  )
}
