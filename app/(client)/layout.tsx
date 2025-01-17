import type { Metadata } from "next";
import { Syne, Prompt } from "next/font/google";
import "../globals.css";

const syne = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Big Productions",
  description: "Website for Big Productions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  );
}
