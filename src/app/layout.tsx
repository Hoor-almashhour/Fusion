import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'

import Navbar from './component/Navbar/Navbar'





const cairo = Cairo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fusion',
  description: 'An integrated platform to support international students applying to Turkish Universities',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cairo .className}>
    
           <Navbar />
            {children}
      </body>
    </html>
  )
}