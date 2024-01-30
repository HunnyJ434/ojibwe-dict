
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ojibwe Eng Dictionary',
  description: 'Ojibwe English Dictionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      
      <body className={inter.className}>
      <Navbar/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}
