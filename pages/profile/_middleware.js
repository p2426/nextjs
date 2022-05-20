import { NextRequest, NextResponse } from 'next/server';

export function middleware(request, event) {

    const url = request.nextUrl;
    const keys = [];
    const values = [];

    let redirect;
    let changed = false;

    url.searchParams.forEach((value, key) => {
        values.push(value);
        keys.push(key);
        url.searchParams.delete(key);
        changed = true;
    });

    redirect = NextResponse.redirect(url);

    keys.forEach((key, i) => {
        redirect.cookie(key, values[i]);
    });

    if (changed) {
        return redirect;
    }
}