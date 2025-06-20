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
        <style>{`
          * { box-sizing: border-box; }
          
          .category-card {
            transition: all 0.3s ease;
          }
          
          .category-card:hover {
            transform: translateY(-5px);
            border-color: #DC143C !important;
            box-shadow: 0 10px 30px rgba(220, 20, 60, 0.2);
          }
          
          .category-card:hover .category-title {
            color: #DC143C !important;
          }
          
          .load-more-btn:hover {
            background-color: #DC143C !important;
            color: #FFD700 !important;
          }
          
          @media (max-width: 1200px) {
            .category-card {
              max-width: calc(20% - 24px) !important;
            }
          }
          
          @media (max-width: 992px) {
            .category-card {
              max-width: calc(25% - 22px) !important;
            }
          }
          
          @media (max-width: 768px) {
            .grid-responsive { grid-template-columns: 1fr !important; }
            .hide-mobile { display: none !important; }
            .text-small-mobile { font-size: 14px !important; }
            .padding-small-mobile { padding: 10px !important; }
            
            .category-card {
              max-width: calc(50% - 15px) !important;
              min-width: 150px !important;
            }
          }
          
          @media (max-width: 480px) {
            .category-card {
              max-width: calc(100% - 30px) !important;
              min-width: 200px !important;
            }
          }
        `}</style>
      </head>
      <body
        style={{ margin: 0, padding: 0, fontFamily: '"DM Sans", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
