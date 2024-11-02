'use client';
import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const registerUser = async () => {
        try {
            let response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'  // Added headers to specify JSON data
                },
                body: JSON.stringify({ name, age })
            });

            let data = await response.json();
            console.log(data);

        } catch (error) {
            console.error("Error registering user:", error);
        }
    }

    return (
        <>
            <h2>Register User</h2>
            <input
                type='text'
                value={name}
                placeholder='Enter Your Name'
                onChange={(e) => setName(e.target.value)}
            /><br /><br />
            <input
                type='text'
                value={age}
                placeholder='Enter Your Age'
                onChange={(e) => setAge(e.target.value)}
            /><br /><br />
            <button onClick={registerUser}>Register User</button>
        </>
    );
}

export default Register;
