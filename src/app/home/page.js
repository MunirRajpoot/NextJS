'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter();
  const handleNavigation = (routerName) => {
    router.push(routerName)
  }
  return (
    <div>
      This is Home Page
      <button onClick={() => {handleNavigation('/about')  }} >About</button>
      <button onClick={ () => { handleNavigation('/contact')} }>Contact</button>
    </div>
  )
}

export default page
