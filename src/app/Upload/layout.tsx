import "../globals.css";
import { WhHeader, Navspan, Butt } from "../Components/comps";
import Link from "next/link";

export const metadata = {
  title: "Upload Files",
  description: "Album to show people",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
        <Navspan link="/" value="Home" />
        <Navspan link="Gallery/" value="Gallery" />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Upload/" value="Upload" home={true} />
      </nav>
      <main className="flex flex-col items-center m-5 border-4 border-black rounded-lg bg-white p-5 min-h-[72vh]  bg-opacity-70">
        <h1 className="text-4xl mb-10 mt-2 text-black font-bold ">
          Upload Files
        </h1>

        {children}
      </main>
    </div>
  );
}
