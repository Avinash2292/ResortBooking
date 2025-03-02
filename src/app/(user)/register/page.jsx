
"use client"

import RegisterForm from '@/app/components/RegisterForm'
import DBConnection from '@/app/utils/config/db'
import React from 'react'


const ConnectToDB = async()=>{
    await DBConnection()
}

ConnectToDB()

const UserRegistration = () => {
  return (
    <div>
         <RegisterForm/>
    </div>
  )
}

export default UserRegistration