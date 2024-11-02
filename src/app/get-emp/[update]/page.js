"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"

const UpdateEmployee = (props) => {
    const router=useRouter()
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
    const [department, setDepartment] = useState("");

    console.log(props.params.update);
    let id = props.params.update;
    useEffect(() => {
        const employeeDetails = async () => {
            let data = await fetch(`http://localhost:3000/api/db-employee/${id}`);
            data = await data.json();
            console.log(data);
            if (data.success) {
                let response = data.result;
                setName(response.name);
                setSalary(response.salary);
                setDepartment(response.department)
            } else {

            }

        }
        employeeDetails();
    }, [id])

    const updateRecord = async () => {
        let data = await fetch(`http://localhost:3000/api/db-employee/${id}`,{
            method:'PUT',
            body:JSON.stringify({name,salary,department})
        })
        data=await data.json()
        if (data.success) {
            alert("Successfully update")
            router.push('/get-emp')
        }
        else{
            alert("Try Again")
        }
    }
    return (
        <>
            <h2>Update Employee PUT Api with mongodb database</h2>
            <input type="text" value={name} placeholder="Employee Name" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" value={salary} placeholder="Employee Salary" onChange={(e) => setSalary(e.target.value)} />
            <br />
            <br />
            <input type="text" value={department} placeholder="Employee Department" onChange={(e) => setDepartment(e.target.value)} />
            <br />
            <br />
            <button onClick={updateRecord}>Submit</button>

        </>
    )
}

export default UpdateEmployee
