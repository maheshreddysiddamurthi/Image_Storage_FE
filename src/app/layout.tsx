import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Auth0ProviderWithConfig from "./providers/authoprovider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Befound",
  description: "Your platform for influencer marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Auth0ProviderWithConfig>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </Auth0ProviderWithConfig>
      </body>
    </html>
  );
}
