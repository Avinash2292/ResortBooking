 

import React from 'react'
import DBConnection from './utils/config/db'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import UserNavigation from './components/UserNavigation'
import AdminPage from './admin/page'
import ProductCollection from './components/ProductCollection'

export const metadata = {
  title : "Home Page"
}

const HomePage = async() => {

  const session = await auth()

  await DBConnection()

  if(!session){
    redirect("/login")
  }

  // const role = session.role
  // console.log(role)

  // console.log("username:",session.username)

  const username = session.username
  return (
    <div>
      {session.role === "user" && (
        <>
            <UserNavigation username={username}/>
            <h1>Welcome To Holiday Resort</h1>
            <ProductCollection/>
        </>
      )}

      {session.role === "admin" && <AdminPage/>}
      
    </div>
  )
}

export default HomePage