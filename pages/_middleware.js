import { NextRequest } from 'next/server';

export function middleware(request) {
  const country = request.geo.country || 'US';

  return new Response(`Hello, World. I'm in ${country}`);
}
