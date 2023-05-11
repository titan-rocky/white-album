import "./globals.css";
import { WhHeader, Navspan, WhFooter } from "./Components/comps";
import Link from "next/link";
import Jose from "jose";

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
  const darkMode = false;
  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={
          "relative flex flex-col items-stretch " +
          (darkMode ? "darksoul" : "wafall")
        }
      >
        <WhHeader user={"dommy"} />
        <main>{children}</main>
        <WhFooter />
      </body>
    </html>
  );
}
