import { connectionString } from "@/lib/database/db_connection";
import { Employee } from "@/lib/database/model/employee";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
    await mongoose.connect(connectionString);
    const empData = await Employee.find()
    return NextResponse.json({ result: empData, success: true })
};

export const POST = async (req) => {
    await mongoose.connect(connectionString);
    const payload = await req.json()
    // const employeeData = new Employee({
    //     name: 'Naseer',
    //     salary: '323K',
    //     department: 'jeken'
    // })
    const employeeData = new Employee(payload)
    const response = await employeeData.save();
    return NextResponse.json({ result: response, success: true })
}
