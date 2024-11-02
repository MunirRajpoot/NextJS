'use client'
import { usePathname } from "next/navigation"

export default function Layout({ children }) {
    const currentPath = usePathname();
    console.log(currentPath);

    return (
        <>
            {
                currentPath !== '/contact/employee' ? <h2>Common Layouts</h2> : null
            }

            {
                children
            }
        </>
    )
}