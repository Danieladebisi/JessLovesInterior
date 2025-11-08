import { useState } from 'react'
import SeoMeta from '@/components/SeoMeta'
import StructuredData from '@/components/StructuredData'
import { pagesSeoData } from '@/config/seoConfig'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <SeoMeta 
        title={pagesSeoData.home.title}
        description={pagesSeoData.home.description}
        keywords={pagesSeoData.home.keywords}
        url={pagesSeoData.home.url}
      />
      <StructuredData type="home" />

      <div className="min-h-screen bg-cream">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Gallery />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}