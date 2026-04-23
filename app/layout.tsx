import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILYASS ELYATIME",
  description:
    "Portfolio showcasing web engineering, design systems, and AI-powered products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="IE PORTFOLIO" />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
