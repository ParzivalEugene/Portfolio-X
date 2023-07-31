"use client";
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
        <link rel="favicon" sizes="any" href="favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className={grotesk.className}>
        <Lenis root>
          <main>{children}</main>
        </Lenis>
      </body>
    </html>
  );
}
