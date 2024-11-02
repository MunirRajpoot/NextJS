'use client'
import { redirect } from 'next/navigation';
import { useState } from 'react';
import React from 'react'

const Redirection = () => {

    const [logOut, setLogOut] = useState(false)
    if (logOut) {
        redirect('/about')
    }
    // redirect('/home');
    return (
        <>
            <h2>Redirection in Next Js</h2>
            <button onClick={()=>setLogOut(true)}>Logout</button>
        </>
    )
}

export default Redirection
