import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { HelmetProvider } from 'react-helmet-async'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#c6824b" />
        <meta name="msapplication-TileColor" content="#c6824b" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </HelmetProvider>
  )
}