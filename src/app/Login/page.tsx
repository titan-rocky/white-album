import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { LoginPanel } from "./components";
import { Navspan } from "../Components/comps";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.auth.findMany();
  console.log(users);
}

async function handleSubmit(username: string, password: string) {
  const data = main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
    });
  console.log(data);
}

export default function Login() {
  return (
    <>
      <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
        <Navspan link="Login/" value="Login" home={true} />
      </nav>

      <div className="bg-white h-[72vh] bg-opacity-60 border-4 border-black m-10 p-10">
        <LoginPanel />
      </div>
    </>
  );
}
