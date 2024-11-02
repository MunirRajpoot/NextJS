// export async function GET(request){
// return new Response('Hello World')
// }

import { NextResponse } from "next/server"

export const GET =(request)=>{
return NextResponse.json({name:"Muneer",subject:"BSCS",age:"20"})
}