import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Smooth from "./smooth";

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
        <Smooth>
          {children}
        </Smooth>
      </body>
    </html>
  );
}
