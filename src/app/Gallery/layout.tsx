import "../globals.css";
import { WhHeader, Navspan, Butt } from "../Components/comps";
import Link from "next/link";

export const metadata = {
  title: "Server Gallery",
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
          <Navspan link="#" value="Gallery" home={true} />
          <Navspan link="Slideshow/" value="Slideshow" disabled={true} />
          <Navspan link="/Upload" value="Upload" />
          <Navspan link="Preferences/" value="Preferences" />
        </nav>
        <main>{children}</main>
        <footer className="bg-black flex justify-center text-white p-10 py-5 mt-5">
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
