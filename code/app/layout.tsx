import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brator - Car Parts',
  description: 'Car parts and accessories'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: '"DM Sans", sans-serif' }}>{children}</body>
    </html>
  )
}
  )
}