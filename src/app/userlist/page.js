'use client'
import { useEffect, useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const userData = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await userData.json())
        }
        getUsers();
    }, [])

    return (
        <>
            <h3>User List & Fetch Data with API</h3>

            <ul>
                {users.map((user,index) => (
                    <li key={user.id}>{index}-{user.username}</li>
                ))}
            </ul>
        </>
    )
}

export default Users;
