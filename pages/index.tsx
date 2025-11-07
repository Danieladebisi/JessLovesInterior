import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Jes Love's Interior Design Studio | Luxury Home & Commercial Design</title>
        <meta 
          name="description" 
          content="Transform your space with award-winning luxury interior design services in Groton, CT. 15+ years experience, 200+ completed projects."
        />
        <meta name="keywords" content="interior design, luxury interior design, home design, commercial design, residential design, space planning, renovation, decorating, Groton Connecticut, Connecticut interior designer" />
      </Head>

      <div className="min-h-screen bg-cream">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}