import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ForensicTraceFund - Blockchain Forensics & Crypto Recovery',
  description: 'Professional blockchain forensics, crypto asset recovery, and compliance solutions',
  keywords: 'blockchain forensics, crypto recovery, wallet decryption, DeFi compliance',
  openGraph: {
    title: 'ForensicTraceFund - Blockchain Forensics & Crypto Recovery',
    description: 'Professional blockchain forensics, crypto asset recovery, and compliance solutions',
    type: 'website',
    url: 'https://forensictracefund.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
