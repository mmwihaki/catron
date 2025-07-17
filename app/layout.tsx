import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brator - Premium Nissan OEM & Performance Parts Kenya",
  description:
    "Kenya's #1 marketplace for genuine Nissan OEM and performance parts. Quality guaranteed, fast delivery, expert fitment support. Shop engine, brakes, suspension, electrical & body parts.",
  keywords:
    "Nissan parts Kenya, OEM parts, performance parts, auto parts, car parts, Nairobi",
  authors: [{ name: "Brator Auto Parts" }],
  openGraph: {
    title: "Brator - Premium Nissan Parts Kenya",
    description:
      "Quality Nissan OEM & performance parts with expert fitment support",
    url: "https://brator.co.ke",
    siteName: "Brator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brator Nissan Parts",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brator - Premium Nissan Parts Kenya",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brator Auto Parts",
              description:
                "Kenya's premier Nissan OEM and performance parts supplier",
              url: "https://brator.co.ke",
              logo: "https://brator.co.ke/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254700000000",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://facebook.com/bratorkenya",
                "https://instagram.com/bratorkenya",
                "https://twitter.com/bratorkenya",
              ],
            }),
          }}
        />
        {/* WhatsApp Business Integration */}
        <meta
          property="business:contact_data:phone_number"
          content="+254700000000"
        />
        <meta
          property="business:contact_data:website"
          content="https://brator.co.ke"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
