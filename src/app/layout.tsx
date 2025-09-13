import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Big Update Coming Soon - Maintenance',
  description: 'We are working on something amazing. Big update coming soon!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html>
      <body className={inter.className}>
        {children}
        <Toaster 
          richColors
          position="top-right"
          expand={true}
          closeButton
          duration={4000}
        />
        {/* Made by signature - appears on all pages */}
        <a 
          href="https://www.linkedin.com/in/dumitru-grigoras" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-200 cursor-pointer"
        >
          <span className="text-sm font-medium text-gray-700 pointer-events-none">Made by GrigorasDumitru</span>
          <svg 
            className="w-5 h-5 text-blue-600 pointer-events-none" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}