import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1>This is About page</h1>
      <Link href='/contact'>Conact</Link>
    </>
  )
}

export default page
