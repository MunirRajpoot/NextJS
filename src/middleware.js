import { NextResponse } from "next/server";
const isLoggedIn=false;

export function middleware(request){

    // if (!isLoggedIn && request.nextUrl.pathname!=='/home') {
    //     return NextResponse.redirect(new URL('/home',request.url))
    // }
    // console.log("This is middleware");
    
}
// export const config={
//     matcher:["/contact/:path*"]
// }