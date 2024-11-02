'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ContactPage = () => {
    const router = useRouter()
    
    return (
        <>
            <h1>This is the Contact Page</h1>
            <Link href='/contact/employee'>Employee</Link>
            <button onClick={() => {
                router.push('/contact/company')
            }}>Contact Company</button>
            <br/>
        </>
    )
}

export default ContactPage
