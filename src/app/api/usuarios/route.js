import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Obtener todos los usuarios de la base de datos
    const users = await prisma.user.findMany();

    // Retornar los usuarios en formato JSON
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return NextResponse.json(
      { message: "Error al obtener los usuarios" },
      { status: 500 }
    );
  }
}