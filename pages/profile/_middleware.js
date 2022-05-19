import { NextRequest, NextResponse } from 'next/server';

export function middleware(request, event) {
    return NextResponse.next();
}