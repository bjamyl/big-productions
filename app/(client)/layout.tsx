import type { Metadata } from "next";
import {  Prompt } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "../globals.css";

const prompt = Prompt({
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
      <body className={prompt.className}>{children}
        <Toaster/>
      </body>
    </html>
  );
}
