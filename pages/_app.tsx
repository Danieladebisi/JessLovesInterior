import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

const seoConfig = {
  title: "Jes Love's Interior Design Studio | Luxury Home & Commercial Design | Groton CT",
  description: "Award-winning interior design studio in Groton, CT specializing in luxury residential and commercial spaces. 15+ years experience, 200+ completed projects.",
  canonical: "https://jeslovesinterior.com",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeslovesinterior.com',
    siteName: "Jes Love's Interior",
    title: "Jes Love's Interior Design Studio | Luxury Design Solutions",
    description: "Transform your space with award-winning luxury interior design services in Connecticut.",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: "Jes Love's Interior Design Studio"
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image'
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  )
}