import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const heroImages = [
    {
      src: '/images/hero/hero1.jpg',
      alt: 'Modern bedroom interior design',
      title: 'Luxury Living Redefined',
      subtitle: 'Creating spaces that inspire and transform lives',
      accent: 'Modern Elegance'
    },
    {
      src: '/images/hero/hero2.jpg', 
      alt: 'Beautiful open concept living room',
      title: 'Create Your Dream Sanctuary',
      subtitle: 'Where comfort meets sophisticated design',
      accent: 'Contemporary Style'
    },
    {
      src: '/images/hero/hero3.jpg',
      alt: 'Modern kitchen design', 
      title: 'Culinary Spaces That Inspire',
      subtitle: 'Functional beauty for the heart of your home',
      accent: 'Kitchen Excellence'
    },
    {
      src: '/images/hero/hero4.jpg',
      alt: 'Scandinavian luxury interior',
      title: 'Personal Spa Retreats', 
      subtitle: 'Transforming ordinary spaces into extraordinary experiences',
      accent: 'Luxury Design'
    }
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length, isPlaying])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  const currentImage = heroImages[currentImageIndex]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background fallback to prevent white flash */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.6 }
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyatmnhbQWe6eFa8Q2kQy1oQyR+dOMyQsuw8a8qRfv0fv8AQy9E7lZ/nj8iA==."
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/10" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full hidden lg:block"
        style={{ willChange: 'transform' }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary via-amber-500 to-amber-400 rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-white text-lg sm:text-2xl font-bold tracking-wider">JL</span>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Jes Love&apos;s</h1>
                <p className="text-amber-200 text-sm sm:text-lg font-bold tracking-widest drop-shadow-lg" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>INTERIOR DESIGN</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mb-4"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-primary text-white text-xs sm:text-sm font-bold rounded-full shadow-lg"
            >
              ✨ {currentImage.accent}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h2
            key={currentImageIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.4 }
            }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight px-2"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {currentImage.title}
            </span>
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`subtitle-${currentImageIndex}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 },
              delay: 0.1
            }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto font-light px-4"
          >
            {currentImage.subtitle}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 md:mb-16 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-bold text-base sm:text-lg shadow-2xl hover:bg-primary-600 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Start Your Project</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ willChange: 'transform' }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPortfolio}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary border-2 border-primary rounded-full font-bold text-base sm:text-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>View Portfolio</span>
              <span className="text-amber-500">⚡</span>
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center px-4"
        >
          {[
            { number: '15+', label: 'Years Experience', icon: '🏆' },
            { number: '200+', label: 'Projects Completed', icon: '🎨' },
            { number: '50+', label: 'Happy Clients', icon: '💖' },
            { number: '100%', label: 'Satisfaction Rate', icon: '⭐' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-primary scale-125 shadow-lg'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="mt-4 mx-auto block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium hover:bg-white/30 transition-all"
        >
          {isPlaying ? '⏸️ Pause' : '▶️ Play'}
        </motion.button>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 right-8 text-white/70"
        style={{ willChange: 'transform' }}
      >
        <div className="text-center">
          <div className="text-sm mb-2">Scroll</div>
          <div className="text-2xl">↓</div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
