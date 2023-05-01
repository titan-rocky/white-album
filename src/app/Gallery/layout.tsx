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
    <body className="bg-gray wafall">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
        <Navspan link="/" value="Home" />
        <Navspan link="#" value="Gallery" home={true} />
        <Navspan link="View/" value="View" disabled={true} />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Upload/" value="Upload" />
      </nav>
      <main>{children}</main>
    </body>
  );
}
