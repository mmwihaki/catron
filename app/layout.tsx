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
        {/* DPI-aware viewport optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />

        {/* High-DPI display optimization */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* High-quality Inter font with display optimization */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* PWA optimization for crisp app-like experience */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef4444" />

        {/* Canvas and WebGL optimization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // DPI-aware canvas optimization
              function optimizeCanvas() {
                const canvases = document.querySelectorAll('canvas');
                canvases.forEach(canvas => {
                  const dpr = window.devicePixelRatio || 1;
                  const rect = canvas.getBoundingClientRect();
                  
                  // Resize the drawing buffer to match device pixel ratio
                  canvas.width = rect.width * dpr;
                  canvas.height = rect.height * dpr;
                  
                  // Scale the 2D context back down
                  const ctx = canvas.getContext('2d');
                  if (ctx) {
                    ctx.scale(dpr, dpr);
                  }
                  
                  // Ensure canvas CSS size matches original intent
                  canvas.style.width = rect.width + 'px';
                  canvas.style.height = rect.height + 'px';
                });
              }
              
              // Apply optimizations on load and resize
              document.addEventListener('DOMContentLoaded', optimizeCanvas);
              window.addEventListener('resize', optimizeCanvas);
              
              // Image optimization for hi-DPI displays
              function optimizeImages() {
                const images = document.querySelectorAll('img[data-optimize]');
                const dpr = window.devicePixelRatio || 1;
                
                images.forEach(img => {
                  const baseSrc = img.dataset.src || img.src;
                  if (dpr >= 3) {
                    img.src = baseSrc.replace('.jpg', '@3x.jpg').replace('.png', '@3x.png');
                  } else if (dpr >= 2) {
                    img.src = baseSrc.replace('.jpg', '@2x.jpg').replace('.png', '@2x.png');
                  }
                });
              }
              
              // Intersection Observer for lazy loading with DPI awareness
              if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      const dpr = window.devicePixelRatio || 1;
                      const baseSrc = img.dataset.src;
                      
                      if (baseSrc) {
                        // Load appropriate DPI version
                        if (dpr >= 3 && img.dataset.src3x) {
                          img.src = img.dataset.src3x;
                        } else if (dpr >= 2 && img.dataset.src2x) {
                          img.src = img.dataset.src2x;
                        } else {
                          img.src = baseSrc;
                        }
                        
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                      }
                    }
                  });
                });
                
                document.addEventListener('DOMContentLoaded', () => {
                  document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                  });
                });
              }
              
              // Pixel-perfect layout enforcement
              function enforcePixelPerfection() {
                const elements = document.querySelectorAll('[data-pixel-perfect]');
                elements.forEach(el => {
                  const rect = el.getBoundingClientRect();
                  el.style.width = Math.round(rect.width) + 'px';
                  el.style.height = Math.round(rect.height) + 'px';
                });
              }
              
              window.addEventListener('load', enforcePixelPerfection);
              window.addEventListener('resize', enforcePixelPerfection);
            `,
          }}
        />

        <script src="https://cdn.tailwindcss.com"></script>

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Catron Auto Parts",
              description:
                "Kenya's premier Nissan OEM and performance parts supplier",
              url: "https://catron.co.ke",
              logo: "https://catron.co.ke/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254742578910",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://facebook.com/catronkenya",
                "https://instagram.com/catronkenya",
                "https://twitter.com/catronkenya",
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
          content="https://catron.co.ke"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
