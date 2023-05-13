"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { fetchData } from "./functions";

export function LoginPanel() {
  const [err, SetErr] = useState(4); //1:incorrect psw 2:user doesnt exist 3:other 0:none
  const [isSubmited, SetSubmit] = useState(false);
  const router = useRouter();
  let username = useRef("");
  let password = useRef("");

  function renderSwitch(err: number) {
    if (true) {
      switch (err) {
        case 0:
          return "Successfully Logged In";
        case 1:
          return "Incorrect Password";
        case 2:
          return "User doesnt Exist";
        default:
          return "";
      }
    }
  }
  return (
    <div>
      <form
        onSubmit={async (e: any) => {
          e.preventDefault();
          const user = await fetchData();
          if (user) {
            let flag = 0;
            // @ts-ignore
            user.forEach((i: any) => {
              if (i.username === username.current) {
                flag = 1;
                SetErr((j) => {
                  return i.password === password.current ? 0 : 1;
                });
                if (i.password === password.current) {
                  SetSubmit(true);
                  setTimeout(() => router.push("/"), 3000);
                }
              }
            });
            if (flag === 0) {
              SetErr(2);
            }
            return user;
          } else {
            return null;
          }
        }}
        className=" flex flex-col items-center"
      >
        <input
          name="username"
          type="text"
          id="userBar"
          placeholder="username"
          className="bg-lbl border-4 border-black m-5 rounded-lg px-2 py-1 placeholder:text-dbl"
          onChange={(e: any) => (username.current = e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          id="passBar"
          placeholder="password"
          className="bg-lbl border-4 black m-5 rounded-lg px-2 py-1 focus:stroke-none placeholder:text-dbl"
          onChange={(e: any) => (password.current = e.target.value)}
          required
        />
        <button>
          <input
            name="submit"
            type="submit"
            disabled={isSubmited}
            value="Login"
            className="bg-dbl disabled:bg-black text-white border-4 border-black shadow-lbl px-7 m-5 py-2"
          />
        </button>
        <span>{renderSwitch(err)}</span>
        <span className="m-10 -mb-3">
          Dont have an account ?{" "}
          <Link href="/Login/Register" className="text-lred ">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
}
