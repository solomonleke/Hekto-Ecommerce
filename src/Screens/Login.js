import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'
import { UserContext } from '../Context/UserContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

export default function Login() {
    const {jwt, setJwt}= useContext(UserContext);
    const {userId, setUserId}= useContext(UserContext);
    const navigate = useNavigate();
    const [payload, setPayload] = useState({
        email:"",
        password:""
    })
    let intended = JSON.parse(localStorage.getItem("route"));

    const handleChange = (e) =>{
        setPayload({...payload, [e.target.id]: e.target.value})
    }

    const handleSubmit = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/login", requestOptions)
        .then(response => response.json())
        .then(result =>{
            // console.log('id', result.user.id);
                if(result){
                    setJwt(result.jwt)
                    setUserId( result.user.id)
                    localStorage.setItem("jwt", JSON.stringify(result.token));
                    localStorage.setItem("email", JSON.stringify(result.user.email));
                    localStorage.setItem("user_id", result.user.id);

                    if(intended){
                        navigate(intended)
                        toast.success('Login Successful. Welcome Back', {position: toast.POSITION.TOP_CENTER, autoClose: 2500});
                    }else{
                        toast.success('Login Successful. Welcome Back', {position: toast.POSITION.TOP_CENTER, autoClose: 2500});
                        navigate('/shopList');
                    }   
                    
                }
                
            }
         )
        .catch(error =>{
            toast.error('Wrong Credentials Detected', {position: toast.POSITION.TOP_CENTER, autoClose: 5000});
             console.log('error', error)
        
        });  
    }



    const checkUser=()=>{
        if(localStorage.getItem('jwt')){
          
         navigate('/login');
            
           
        }else{
            navigate('/login');
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
            
            <h4 style={{textAlign: "center"}} id="login-txt">Login</h4>
            <p style={{textAlign: "center"}} className="login-txt mb-4">Please login using account details below</p>
            
            <input className='login-input ' id='email' value={payload.email} type="email" onChange={handleChange} placeholder="Email address" /> <br /> <br />
            <input className='login-input' id='password' value={payload.password} type="password" onChange={handleChange} placeholder="Password" />
            <p className="login-txt mt-4 mb-4">Forgot your password?</p>
            <button className='login-btn' onClick={handleSubmit} style={{color: "white"}}>Sign in</button>
            <p className="login-txt mt-4" style={{textAlign: "center"}}>Don’t have an Account? <Link to="/register" className="form-link"> Create account</Link></p>
        </div>

        <PreFooter/>
       
    </div>
    )
}
