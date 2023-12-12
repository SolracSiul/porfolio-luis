import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', ]
})

export const metadata: Metadata = {
  title: 'Luis Carlos DEV',
  description: 'My personal porfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scrool-custom'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
