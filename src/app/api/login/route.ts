import { Router } from "next/router";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "next/dist/server/next";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ name: "Bharath" });
}

export async function GET(req: NextRequest, res: NextResponse) {
  //const { username, password } = req.body.username;
  let data = prisma.auth.findMany();
  await prisma.$disconnect();
  return NextResponse.json(data);
}
