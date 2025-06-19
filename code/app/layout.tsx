import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brator - Car Parts & Accessories",
  description: "#1 Online Marketplace for Car Spares OEM & Aftermarkets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
