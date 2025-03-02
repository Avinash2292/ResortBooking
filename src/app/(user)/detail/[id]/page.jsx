

import { auth } from '@/app/auth'
import DynamicProduct from '@/app/components/ProductDetail'
import UserNavigation from '@/app/components/UserNavigation'
import Link from 'next/link'
import React from 'react'

const page = async() => {
  const session = await auth()

  const userName = session.username

  return (
    <div>
      <UserNavigation userName={userName}/>
      {/* <Link href="/">
        <p align="center">Go Back</p>
      </Link> */}
      <DynamicProduct />
    </div>
  )
}

export default page
