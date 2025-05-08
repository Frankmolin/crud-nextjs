import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { SignJWT } from 'jose';

const palabrasecreta= process.env.LASECRETA || 'PALTA'

export async function POST(request,res) {
    const { email, password } = await request.json()
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.password !== password) {
        return NextResponse.json({ message: 'Credenciales inválidas' }, { status: 401 });
      }

        const secret = new TextEncoder().encode(palabrasecreta);

        const token = await new SignJWT({ user: 'Franco' })
          .setProtectedHeader({ alg: 'HS256' })
          .setIssuedAt()
          .setExpirationTime('24h')
          .sign(secret);
      
          const response = NextResponse.json({ message: 'Autenticado' });

          response.cookies.set({
            name: 'token',
            value: token,
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: true, 
          });
          
          return response;
            
}
