// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
const palabrasecreta= process.env.LASECRETA || 'PALTA'
const secret = new TextEncoder().encode(palabrasecreta);

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Verifica que el token sea válido
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    console.error('Token inválido o expirado:', err);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
// middleware.js (al final del archivo)
export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};
