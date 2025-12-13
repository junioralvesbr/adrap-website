import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "ADRAP - Associação das Ruas ao Palácio",
  alternates: {
    canonical: "https://adrap.ong.br",
  },
  metadataBase: new URL("https://adrap.ong.br"),
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    images: "/adrap-logo.jpg",
    title: "ADRAP - Associação das Ruas ao Palácio",
  },
  authors: { name: "Junior Alves" },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "/android-chrome-192x192.png",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${poppins.variable} antialiased`}
      >
        <div className="bg-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
