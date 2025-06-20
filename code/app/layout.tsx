import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brator Kenya - Premium Auto Parts",
  description:
    "Premium car parts and accessories in Kenya. Quality OEM and aftermarket parts from trusted brands like RIDEX, KAVO, OSRAM, NGK.",
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ margin: 0, padding: 0, fontFamily: '"DM Sans", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
