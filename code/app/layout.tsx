export const metadata = {
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { box-sizing: border-box; }
          @media (max-width: 768px) {
            .grid-responsive { grid-template-columns: 1fr !important; }
            .hide-mobile { display: none !important; }
            .text-small-mobile { font-size: 14px !important; }
            .padding-small-mobile { padding: 10px !important; }
          }
        `}</style>
      </head>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
