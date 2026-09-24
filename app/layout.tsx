import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Aliff Iskandar | Full Stack & AI Developer Enthusiast',
  description: 'Full Stack and AI developer portfolio for Aliff Iskandar, a fresh graduate building responsive and accessible web interfaces with React, Next.js, and TypeScript and AI automation tools.',
  keywords: ['Aliff Iskandar', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'Fresh Graduate', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Tailwind CSS', 'AI Automation', 'AI Integration', 'Web Development', 'Software Engineer', 'Open to Work'],
  authors: [{ name: 'Aliff Iskandar' }],
  openGraph: {
    title: 'Aliff Iskandar | Full Stack & AI Developer Enthusiast',
    description: 'Fresh graduate full stack and AI developer building responsive web applications with React, Next.js, and TypeScript and AI automation tools.',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        alt: 'Aliff Iskandar portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
      title: 'Aliff Iskandar | Full Stack & AI Developer Enthusiast',
    description: 'Fresh graduate full stack and AI developer building responsive web applications with React, Next.js, and TypeScript and AI automation tools.',
    images: ['/logo.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
