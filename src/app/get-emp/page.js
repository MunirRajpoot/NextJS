"use client"
import Delete from '@/components/Delete';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const getData = async () => {
    let data = await fetch('http://localhost:3000/api/db-employee',{cache:'no-store'});
    data = await data.json();
    if (data.success) {
        return data.result;
    } else {
        return [];
    }
};

const GetEmployee = () => {
    const [emp, setEmp] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setEmp(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <h2>Get Employee From MongoDB Database</h2>
            <Link href={'./'}>Back to home</Link>

            <table border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.length > 0 ? (
                        emp.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td> {/* Replace with actual property names */}
                                <td>{item.salary}</td>
                                <td>{item.department}</td>
                                <td><Link href={`get-emp/${item._id}`}>Edit</Link></td>
                                <td><Delete id={item._id}/></td>

                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default GetEmployee;
