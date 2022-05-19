import { NextRequest, NextResponse } from 'next/server';

export function middleware(request, e) {
  // const country = request.geo.country || 'US';

  // return NextResponse.json(`Hello, World. I'm in ${country}`);
  // return NextResponse.json(`Cookies: ${JSON.stringify(request.cookies)}`);
  // Go onto desired page
  return NextResponse.next();
}