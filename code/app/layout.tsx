import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brator - Car Parts",
  description: "Car parts and accessories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
