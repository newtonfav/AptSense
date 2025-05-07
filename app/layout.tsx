import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Navigation from "./_components/navigation";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | AptSense",
    default: "AptSense",
  },
  description: "Ace your aptitude examinations with AptSense.",
  authors: [{ name: "Favour Oghenekowho", url: "https://newtonfav.xyz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-primary-100 text-black min-h-screen flex flex-col`}
      >
        <ClerkProvider>
          <Header />

          <div className="flex-1 px-4 py-4 grid">
            <main className="mx-auto w-full max-w-7xl overflow-x-hidden">
              {children}
            </main>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
