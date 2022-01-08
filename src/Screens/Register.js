import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'

export default function Register() {

  const navigate = useNavigate();
  const [payload, setPayload] = useState({
      email:"",
      password:""
  })

  const handleChange = (e) =>{
      setPayload({...payload, [e.target.id]: e.target.value})
  }

  const handleSubmit = () =>{
      var myHeaders = new Headers();
      console.log(myHeaders);
      myHeaders.append("Content-Type", "application/json");
    

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: 'follow'
      };

      fetch("http://127.0.0.1:8000/api/register", requestOptions)
      .then(response => response.json())
      .then(result =>{
          if(result){
              localStorage.setItem("jwt", JSON.stringify(result.token));
              // console.log('register_result',result);
              navigate('/shopGrid');
          }
          
          }
       )
      .catch(error =>{
          alert("Something went wrong! Please check your internet connection....");
           console.log('error', error)
      
      });
  }

  const checkUser=()=>{
    if(localStorage.getItem('jwt')){
        navigate('/shopGrid');
    }
}

useEffect(() => {
    checkUser()
  }, [])
  return (
    <div>
    
    <Nav/>

    <Header
    title = "My account "
    />
            <div className="login">
                
                <h4 style={{textAlign: "center"}} id="login-txt">Register</h4>
                <p style={{textAlign: "center"}} className="login-txt mb-4">Please register using account details below</p>
                
                <input className='login-input' id='email' value={payload.email} type="email" onChange={handleChange} placeholder="Email address" /> <br /> <br />
                <input className='login-input' id='password' value={payload.password} type="password" onChange={handleChange} placeholder="Password" />
                <p className="login-txt mt-4 mb-4">Forgot your password?</p>
                <button className='login-btn' onClick={handleSubmit} style={{color: "white"}}>Sign Up</button>
                <p className="login-txt mt-4" style={{textAlign: "center"}}>Already have an Account? <Link to="/login" className="form-link"> Login</Link></p>


            </div>
          <PreFooter/>
        </div>
  )
}
