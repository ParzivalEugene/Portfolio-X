"use client";
import Navbar from "@/components/Navbar";
import { Lenis } from "@studio-freight/react-lenis";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Michkoff | Portfolio",
  description: "My professional portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="256x256" href="/m_logo.svg" />
        <title>{metadata.title}</title>
      </head>
      <body className={grotesk.className}>
        <Lenis root>
          <div className="mx-auto my-5 max-w-[1400px]">
            {children}
          </div>
        </Lenis>
      </body>
    </html>
  );
}
