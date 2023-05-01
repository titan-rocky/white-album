import "../globals.css";
import { WhHeader, Navspan, Butt } from "../Components/comps";
import Link from "next/link";

export const metadata = {
  title: "Preferences",
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
          <Navspan link="Upload/" value="Upload" />
          <Navspan link="Preferences/" value="Preferences" home={true} />
        </nav>
        <>{children}</>
      </body>
    </html>
  );
}
