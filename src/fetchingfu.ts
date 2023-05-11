import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Post() {
  const user = await prisma.auth.create({
    data: {
      username: "rocka",
      password: "mightyrockashit",
    },
  });
  console.log(user);
}

Post().then(
  async () =>
    await prisma.$disconnect().catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    })
);
