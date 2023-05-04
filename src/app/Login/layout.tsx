import { WhHeader, Navspan, Butt } from "../Components/comps";

export const metadata = {
  title: "White Album",
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
        <Navspan link="Login/" value="Login" home={true} />
        <Navspan link="Gallery/" value="Gallery" />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Upload/" value="Upload" />
      </nav>
      <main>{children}</main>
    </div>
  );
}
