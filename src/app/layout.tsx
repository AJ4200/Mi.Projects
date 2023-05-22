import './globals.css'
import '../../styles/logo.css'
import '../../styles/section.css'
import '../../styles/tabButton.css'
import '../../styles/customebg.css'
import '../../styles/projectmodal.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi.Projects - beta',
  description: 'Keep track and showcase your projects with Mi.Projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
