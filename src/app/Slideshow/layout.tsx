import "../globals.css";
import { WhHeader, Navspan, Butt } from "../Components/comps";

export const metadata = {
  title: "Slideshow",
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
      <body className="darksoul h-[80vh] overflow-scroll">
        <WhHeader />
        <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
          <Navspan link="/" value="Home" />
          <Navspan link="Gallery/" value="Gallery" />
          <Navspan link="Slideshow/" value="Slideshow" home={true} />
          <Navspan link="Upload/" value="Upload" />
          <Navspan link="Preferences/" value="Preferences" />
        </nav>
        <>{children}</>
      </body>
    </html>
  );
}
