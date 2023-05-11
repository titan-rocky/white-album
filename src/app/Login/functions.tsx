"use server";
import { PrismaClient } from "@prisma/client";

export async function fetchData() {
  "use server";
  const prisma = new PrismaClient();
  let data;
  await prisma.auth
    .findMany()
    .then(async (i) => {
      data = i;
      await prisma.$disconnect();
    })
    .catch(async (e: any) => {
      console.log(e.response.data);
      await prisma.$disconnect();
    });
  await prisma.$disconnect();
  return data;
}
