'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  }

  return (
    <div>
      <h1>This is the Home Page</h1>
      <button onClick={() => handleNavigation('/about')}>About</button>
      <button onClick={() => handleNavigation('/contact')}>Contact</button>
    </div>
  )
}

export default HomePage;
