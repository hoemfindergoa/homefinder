import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gelroy = localFont({
  src: "./fonts/Gilroy-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Home finder",
  description: "find villas and property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gelroy.variable} ${gelroy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
