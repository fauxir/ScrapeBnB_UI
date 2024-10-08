import { NextResponse } from "next/server";

export function middleware(request: any){
    const origin = request.headers.get('origin');
    console.log(origin)

    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Max-Age", "86400");

    return response
}

export const config = {
    matcher: '/api/:path*'
}