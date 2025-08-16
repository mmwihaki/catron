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
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef4444" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
