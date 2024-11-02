"use client"
import { useState } from "react"

const AddEmployee = () => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");

    const handleAddEmployee = async () => {
        // console.log(name, salary, department);
        let data = await fetch('http://localhost:3000/api/db-employee', {
            method: "POST",
            body: JSON.stringify({ name, salary, department })
        })
        data = await data.json();

        if (data.success) {
            alert("Added Successfully");
            setName('')
            setSalary('')
            setDepartment('')
        }
        else {
            alert("Try Again")
        }
    }
    return (
        <>
            <h2>Add Employee Post Api with mongodb database</h2>
            <input type="text" value={name} placeholder="Employee Name" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" value={salary} placeholder="Employee Salary" onChange={(e) => setSalary(e.target.value)} />
            <br />
            <br />
            <input type="text" value={department} placeholder="Employee Department" onChange={(e) => setDepartment(e.target.value)} />
            <br />
            <br />
            <button onClick={handleAddEmployee}>Submit</button>

        </>
    )
}

export default AddEmployee
