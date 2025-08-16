import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Catron - Premium Nissan OEM & Performance Parts Kenya",
  description: "Kenya's #1 marketplace for genuine Nissan OEM and performance parts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
