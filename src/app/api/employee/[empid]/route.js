import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = (req, value) => {

    console.log("this is get value params:" ,value.params.empid);


    const empData = employee.filter((item) => item.employeeId == value.params.empid);
    console.log("empData", empData);
    let result = empData.length === 0 ? { result: "No Employee Found" } : { result: empData };
    console.log(result);
    return NextResponse.json(result, { status: 200 })
}

export const DELETE = (req, value) => {

    let employeeId = value.params.empid;
    if (employeeId) {
        return NextResponse.json({ result: "Employee Info Deleted successfully", success: true }, { status: 200 })
    }
    else {
        return NextResponse.json({ result: "Employee Not Found", success: false }, { status: 404 })
    }
}

export const PUT = async (req, value) => {
    let payload = await req.json();
    // console.log("payload", payload);
    payload.employeeId = value.params.empid;
    // console.log(payload);

    // return NextResponse.json({success:true})

    if (!payload.employeeId || !payload.name || !payload.salary || !payload.email) {
        return NextResponse.json({ result: "Error", success: false })
    }
    else {
        return NextResponse.json({ result: "Successfully Updated", success: true })
    }
}