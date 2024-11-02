'use client'

import { useEffect, useState } from "react";

const UpdateInfo = ({ params }) => {
    const employeeID = params.empid;
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const getEmpInfo = async () => {
            try {
                let data = await fetch(`http://localhost:3000/api/employee/${employeeID}`);
                data = await data.json();
                console.log("data", data);

                if (data.result) {
                    setName(data.result.name);
                    setSalary(data.result.salary);
                    setEmail(data.result.email);
                }
            } catch (error) {
                console.error("Error fetching employee info:", error);
            }
        };
        getEmpInfo();
    }, [employeeID]);

    const update = async () => {
        try {
            let data = await fetch(`http://localhost:3000/api/employee/${employeeID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, salary, email }),
            });
            data = await data.json();

            if (data.success) {
                alert("Successfully Updated...");
            } else {
                alert("Not Successfully Updated");
            }
        } catch (error) {
            console.error("Error updating employee info:", error);
            alert("An error occurred while updating the information.");
        }
    };

    return (
        <>
            <h3>Update Employee Info</h3>
            <br />
            <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type="text" placeholder="Enter Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
            <br />
            <br />
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <button onClick={update}>Update</button>
        </>
    );
};

export default UpdateInfo;
