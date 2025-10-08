import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from './component/Navbar/Navbar'





const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fusion',
  description: 'An integrated platform to support international students applying to Turkish Universities',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
           <Navbar />
            {children}
      </body>
    </html>
  )
}