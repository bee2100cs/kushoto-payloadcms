import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import localFont from 'next/font/local'
import 'swiper/css'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const franklinGothic = localFont({
  src: [
    {
      path: './fonts/FRAHV.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/FRABK.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/FRABK.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/FRABK.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FRABK.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FRABKIT.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/FranklinGothic-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-franklin-gothic',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(franklinGothic.variable, franklinGothic.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        {/* <link href="/favicon.svg" rel="icon" type="image/svg+xml" /> */}
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@0xkushoto',
  },
}
