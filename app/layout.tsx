import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Catron - Premium Nissan OEM & Performance Parts Kenya",
  description:
    "Kenya's #1 marketplace for genuine Nissan OEM and performance parts. Quality guaranteed, fast delivery, expert fitment support. Shop engine, brakes, suspension, electrical & body parts.",
  keywords:
    "Nissan parts Kenya, OEM parts, performance parts, auto parts, car parts, Nairobi",
  authors: [{ name: "Catron Auto Parts" }],
  openGraph: {
    title: "Catron - Premium Nissan Parts Kenya",
    description:
      "Quality Nissan OEM & performance parts with expert fitment support",
    url: "https://catron.co.ke",
    siteName: "Catron",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Catron Nissan Parts",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catron - Premium Nissan Parts Kenya",
    description:
      "Quality Nissan OEM & performance parts with expert fitment support",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  metadataBase: new URL("https://catron.co.ke"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#ef4444" />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
