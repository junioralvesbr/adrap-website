import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'ADRAP - Associação das Ruas ao Palácio',
  description: 'ADRAP - Associação das Ruas ao Palácio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${_poppins.variable} font-sans antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
