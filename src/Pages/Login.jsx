import React, { useState } from 'react'
import './Login.css'
import { auth } from '../Firebase'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'



function Login() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");

    const login = async (event)=>{
        event.preventDefault();

        try{
          const userCredential= await signInWithEmailAndPassword(auth, email,password)
            navigate("/home")
        }catch(error){
          console.log(error)
        }
    }


  return (
    <div className='login'>
    <img src='https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.png' className='login_logo' alt='facebook'/>
    <div className='login_container'>
        <h3>Login to Facebook</h3>
        <form>
            <center>
                <input type='email' placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
            </center>
            <center>
                <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </center>
            <center>
                <button onClick={login} type='submit' className='login_login'>Log in</button>
            </center>
            <center>
                <div className='sideinfo'>
                    <h5>Forgotten Password</h5>
                    <h5 className='dot'>.</h5>
                    <Link to='/signup' style={{textDecoration:'none'}}> 
                        <h5 className='rtd'>Signup for Facebook</h5>
                    </Link>
                </div>
            </center>
        </form>
    </div>
    
    </div>
  )
}

export default Login
