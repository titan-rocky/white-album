import "../globals.css";
import { WhHeader, Navspan, Butt } from "../Components/comps";

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
      </body>
    </html>
  );
}
