import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mouad Abbassid | Full-stack Developer",
  description: "Portfolio of Mouad Abbassid, a full-stack developer building reliable web platforms and developer tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
