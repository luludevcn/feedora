import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest, response: NextResponse) {
    const data = request.body;
    console.log('Received:', { data });
    return NextResponse.json({ success: true });
}