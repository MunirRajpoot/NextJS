'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router= useRouter()
    return (
        <>
           <h1> This is Contact Page</h1>
            <Link href='/contact/employee'>Employee</Link>
            <button onClick={()=>{
                router.push('/contact/company')
            }}>Contact Company</button>
            <br/>

        </>
    )
}

export default page
