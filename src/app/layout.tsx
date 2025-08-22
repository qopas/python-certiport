import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Python IT Specialist Quiz',
  description: 'Test your Python knowledge with our comprehensive quiz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html>
      <body>
        {children}
        <Toaster 
          richColors
          position="top-right"
          expand={true}
          closeButton
          duration={4000}
        />
      </body>
    </html>
  )
}