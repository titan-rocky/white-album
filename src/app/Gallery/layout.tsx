import "../globals.css";
import { WhHeader, Navspan, Butt } from "../Components/comps";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Server Gallery",
  description: "Album to show people",
  icons: {
    icon: "./favicon.ico",
  },
};

function Loading() {
  return (
    <div className="flex flex-col bg-white items-center border-4 border-black rounded-lg bg-opacity-70 m-10 p-10">
      <span className="text-center text-lg">Loading ... </span>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
        <Navspan link="/" value="Home" />
        <Navspan link="#" value="Gallery" home={true} />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Upload/" value="Upload" />
      </nav>
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  );
}
