"use client"

import { useRouter } from "next/navigation"

const Delete = ({ id }) => {

    const router= useRouter()
    const deleteInfo = async () => {
        let data = await fetch(`http://localhost:3000/api/db-employee/${id}`,
            {
                method: "DELETE"
            }

        )
        data = await data.json();
        if (data.success) {
            alert("Deleted Successfully");
            router.push('/')
        } else {
            alert("Try Again")
        }
    }
    return (
        <>
            <button onClick={deleteInfo}>Delete</button>
        </>
    )
}

export default Delete
