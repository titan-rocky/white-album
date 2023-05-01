import "../globals.css";
import { WhHeader, Navspan } from "../Components/comps";
import Link from "next/link";

export const metadata = {
  title: "View Image",
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
    <body className="darksoul h-[80vh] overflow-scroll">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
        <Navspan link="/" value="Home" />
        <Navspan link="Gallery" value="Gallery" />
        <Navspan link="#" value="View" home={true} />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Upload/" value="Upload" />
      </nav>

      <>{children}</>
    </body>
  );
}
