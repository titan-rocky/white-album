import "./globals.css";

export const metadata = {
  title: "White Album",
  description: "Album to show people",
  charset: "UTF-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
