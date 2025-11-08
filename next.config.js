/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif']
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
  }
}

module.exports = nextConfig