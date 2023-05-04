import "./globals.css";
import { WhHeader, Navspan, WhFooter } from "./Components/comps";
import Link from "next/link";

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
    <html lang="en">
      <body className="relative flex flex-col items-stretch wafall">
        <WhHeader user={"dommy"} />
        <main>{children}</main>
      </body>
    </html>
  );
}
