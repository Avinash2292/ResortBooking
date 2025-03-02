
"use client"

import React, { useState } from 'react'
import { registerAction } from '../serverActions/registerActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {

    const [username,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const router = useRouter()

    const registerHandler = async(e)=>{
        e.preventDefault()

        const userRegisterDetails = {username,email,password}
        console.log(userRegisterDetails)

        try {
            const response = await registerAction(userRegisterDetails)
            if(response.success){
                alert("User Registered Successfully...")
                router.push("/login")
            }
        } catch (error) {
            console.log(error)
        }
        
    }

  return (
    <div className='formContainer'>
        <h1>Register Form</h1>
        <form className='formSection' onSubmit={registerHandler}>
            <h3>UserName</h3>
            <input type="text" name='username' value={username} placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>

            <h3>Email</h3>
            <input type="email" name='email' value={email} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>

            <h3>Password</h3>
            <input type="password" name='password' value={password} placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>

            <br />
            <button type='submit'>Register</button>
        </form>

        <Link href="/login">
            <p>Already Registered? Login </p>
        </Link>
    </div>
  )
}

export default RegisterForm