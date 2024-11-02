import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export const GET=(request)=>{
    let data=employee;
    return NextResponse.json(data,{status:200})
}