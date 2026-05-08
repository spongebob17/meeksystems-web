import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Meek Systems | AI Operating Systems for Small Business',
  description:
    'Meek Systems is the parent company behind Merridian, Bruwis, and Kindr. We build AI operating systems for operators who need implementation, not advice.',
  keywords: 'AI systems, small business AI, Merridian, Bruwis, Kindr, Meek Systems, Jimik Ligon',
  openGraph: {
    title: 'Meek Systems | AI Operating Systems for Small Business',
    description:
      'One system. Every function. Built for people ready to move.',
    url: 'https://meeksystems.com',
    siteName: 'Meek Systems',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meek Systems | AI Operating Systems for Small Business',
    description: 'One system. Every function. Built for people ready to move.',
  },
  metadataBase: new URL('https://meeksystems.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-warm-white min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
