import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'AI & XR Solutions | Transform Your Business',
  description: 'Expert AI integrations, XR development, and AI enablement consulting services. Transform your business with cutting-edge technology solutions.',
  keywords: 'AI integration, XR development, AR/VR, AI consulting, machine learning, artificial intelligence, extended reality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 