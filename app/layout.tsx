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
  title: 'Backend Engineer & AI Developer | Portfolio',
  description: 'Engineering scalable backends and AI-driven experiences. Expertise in TypeScript, Node.js, and OpenAI integrations.',
  keywords: ['Backend Developer', 'AI Engineer', 'TypeScript', 'Node.js', 'OpenAI', 'Full Stack'],
  authors: [{ name: 'Developer' }],
  openGraph: {
    title: 'Backend Engineer & AI Developer | Portfolio',
    description: 'Engineering scalable backends and AI-driven experiences.',
    type: 'website',
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
