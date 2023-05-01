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
    <html lang="en">
      <body className="bg-gray">
        <WhHeader />
        <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
          <Navspan link="/" value="Home" />
          <Navspan link="Gallery/" value="Gallery" />
          <Navspan link="Slideshow/" value="Slideshow" disabled={true} />
          <Navspan link="#" value="Upload" home={true} />
          <Navspan link="Preferences/" value="Preferences" />
        </nav>
        <main className="flex flex-col items-center m-5 border-4 border-black rounded-lg bg-white p-5 min-h-[72vh]">
          {children}
        </main>
        <footer className="bg-black flex justify-center text-white p-10 py-5">
          <span className="">&copy; Copyright titan_rocky@2023</span>
          <Link
            href="https://github.com/titan-rocky/white-album"
            className="text-ylw ml-[20em] text-lg"
            target="_blank"
          >
            Github repo
          </Link>
        </footer>
      </body>
    </html>
  );
}
