

"use client"

import React, { useState } from 'react'
import { loginAction } from '../serverActions/loginActions'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const UserLogin = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const router = useRouter()

    const loginHandler = async(e)=>{
        e.preventDefault()

        const loginDetails = {email,password}

        console.log(loginDetails)

        try {
            const response = await loginAction(loginDetails)
            if(response.success){
                  router.push("/")
            }else{
              setError(response.message || "login failed, Invalid Credentials");
            }
          } catch (error) {
              setError("Invalid Credentials")
          }
    }

  return (
    <div className='formContainer'>
      <h1>Login Form</h1>
        <form className='formSection' onSubmit={loginHandler}>
            {error && <p style={{color:"red"}}>{error}</p>}
            <h3>Email</h3>
            <input type="text" name='email' placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}} />

            <h3>Password</h3>
            <input type="password" name='password' placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}} />
            <br />
            <button type='submit'>Login</button>
        </form>

        <Link href="/register">
              If not registered? Register 
        </Link>
    </div>
  )
}

export default UserLogin