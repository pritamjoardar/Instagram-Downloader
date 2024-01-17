import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Best Free Instagram Downloader Tool - Download Photos, Videos, Reels, and IGTV Online for Mobile and PC',
  description: 'Explore the ultimate Instagram downloader for free! Download Instagram photos, videos, stories, reels (mp4), and IGTV content effortlessly with our online tool. Fast, easy, and reliable – get your favorite content on both mobile and PC with our Instagram downloader.',
}
 
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
