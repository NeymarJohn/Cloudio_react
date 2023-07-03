import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request, response) {
  const country = request.geo ? request.geo.country : 'Unknown'
  const url = request.nextUrl.clone()
  //   try {
  //     if (country === 'US') {
  //       url.pathname = '/app/block'
  //       return NextResponse.redirect(url)
  //     } else if (url.pathname === '/app') {
  //       url.pathname = '/app/vaults'
  //       return NextResponse.redirect(url)
  //     } else if (url.pathname === '/app/block') {
  //       url.pathname = '/block'
  //       return NextResponse.redirect(url)
  //     }
  //   } catch (error) {}
  if (url.pathname === '/') {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }
}
