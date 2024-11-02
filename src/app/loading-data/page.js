'use client'
import { useState, useEffect } from "react";
import Loader from "./loader";
async function getUser() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    data = await data.json();
    return data;
}
const LoadingData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            let fetchDataUsers = await getUser();
            console.log(fetchDataUsers);

            setUsers(fetchDataUsers);
            setLoading(false);
        }
        fetchData();
    }, [])
    return (
        <>
            <h2>Loading data With Loader in Next Js 14</h2>
            {
                loading ? <Loader /> :
                    (
                        users.map((user, i) => (
                            <h3 key={i}>Name: {user.name}</h3>
                        ))
                    )
            }
        </>
    )
}

export default LoadingData
