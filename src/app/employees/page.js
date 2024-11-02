import Link from 'next/link';
import React from 'react'

const Employees = () => {
    return (
        <>
            <h2>Employees</h2>
            <ul>
                <li><Link href="/employees/muneer">Muneer</Link></li>
                <li><Link href="/employees/saif">Saif</Link></li>
                <li><Link href="/employees/naseer">Naseer</Link></li>
            </ul>
        </>
    )
}

export default Employees;
