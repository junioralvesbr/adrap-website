import CampaignModal from '@/components/campaign-modal'
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
  metadataBase: new URL('https://adrap.ong.br'),
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    me: ['associacaoadrap@gmail.com', 'https://adrap.ong.br'],
    other: {
      bing: 'Bing',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    images: '/logo.png',
    title: 'ADRAP - Associação das Ruas ao Palácio',
  },
  authors: { name: 'Junior Alves' },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: ['/logo.png'],
    other: [
      {
        rel: '/android-chrome-192x192.png',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  twitter: {
    title: 'ADRAP - Associação das Ruas ao Palácio',
    description:
      'A ADRAP é uma ONG que visa promover a dignidade e a dignidade das pessoas que vivem na rua.',
    // siteId: 'prj_4IBaNnMK4MnvcPrgEFHHNSBlhINE',
    creator: 'Junior Alves',
    // creatorId: 'lX02uwy4OteDC5MLg4V8nXvP',
    images: ['https://www.adrap.ong.br/logo.png'], // Must be an absolute URL
  },
  manifest: '/site.webmanifest',
  assets: ['https://www.adrap.ong.br/images'],
  category: 'ONG',
  pinterest: {
    richPin: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${_poppins.variable} font-sans antialiased`}>
        <CampaignModal />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
