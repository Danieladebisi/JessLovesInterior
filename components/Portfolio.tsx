import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface PortfolioItem {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description: string
  location: string
}

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  // Portfolio images with different categories
  const portfolioItems = useMemo(() => [
    {
      id: 1,
      src: '/images/portfolio/living-room-1.jpg',
      alt: 'Modern sofa and armchairs in contemporary house',
      category: 'living-room',
      title: 'Contemporary Living Space',
      description: 'Modern living room featuring stylish sofa and armchair arrangement',
      location: 'Groton, CT'
    },
    {
      id: 2,
      src: '/images/portfolio/bedroom-1.jpg',
      alt: 'Modern light bedroom with beautiful design',
      category: 'bedroom',
      title: 'Light & Airy Bedroom',
      description: 'Modern bedroom featuring beautiful lighting and contemporary design',
      location: 'Groton, CT'
    },
    {
      id: 3,
      src: '/images/portfolio/kitchen-1.jpg',
      alt: 'Wooden bar counter with stylish seating',
      category: 'kitchen',
      title: 'Modern Bar Kitchen',
      description: 'Contemporary kitchen featuring wooden bar counter and stylish seating',
      location: 'Groton, CT'
    },
    {
      id: 4,
      src: '/images/portfolio/living-room-2.jpg',
      alt: 'Modern living room interior design',
      category: 'living-room',
      title: 'Modern Living Excellence',
      description: 'Sophisticated living area with contemporary design elements',
      location: 'Groton, CT'
    },
    {
      id: 5,
      src: '/images/portfolio/living-room-3.jpg',
      alt: 'Eclectic living room with comfortable velvet furniture',
      category: 'living-room',
      title: 'Eclectic Comfort',
      description: 'Comfortable living space with eclectic design and velvet furnishings',
      location: 'Groton, CT'
    },
    {
      id: 6,
      src: '/images/portfolio/bedroom-2.jpg',
      alt: 'Luxury children relaxation area',
      category: 'bedroom',
      title: 'Luxury Kids Space',
      description: 'Beautiful children\'s room with relaxation area and luxury finishes',
      location: 'Groton, CT'
    },
    {
      id: 7,
      src: '/images/gallery/gallery-1.jpg',
      alt: '3D illustration mockup photo frame in lounge room',
      category: 'decor',
      title: 'Artistic Lounge Decor',
      description: 'Beautiful lounge room featuring artistic photo frame arrangements',
      location: 'Groton, CT'
    },
    {
      id: 8,
      src: '/images/gallery/gallery-2.jpg',
      alt: 'Black designed lamp above table',
      category: 'decor',
      title: 'Designer Lighting',
      description: 'Stunning black designer lamp creating perfect ambient lighting',
      location: 'Groton, CT'
    },
    {
      id: 9,
      src: '/images/gallery/gallery-3.jpg',
      alt: 'Beautiful coffee table styling',
      category: 'decor',
      title: 'Coffee Table Styling',
      description: 'Professional coffee table styling with elegant accessories',
      location: 'Groton, CT'
    }
  ], [])

  const categories = ['all', 'living-room', 'bedroom', 'kitchen', 'decor']

  const filteredItems = useMemo(() => {
    return filter === 'all' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === filter)
  }, [filter, portfolioItems])

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amber-400/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold">
              📸 Our Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our stunning collection of completed projects showcasing our expertise in luxury interior design.
          </p>
        </motion.div>
        
        {/* Enhanced Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`relative px-6 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden ${
                filter === category
                  ? 'bg-primary text-white shadow-xl'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-primary'
              }`}
            >
              {filter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary"
                  style={{ borderRadius: '9999px' }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                {category === 'all' && <span>📋</span>}
                {category === 'living-room' && <span>🛋️</span>}
                {category === 'bedroom' && <span>🛏️</span>}
                {category === 'kitchen' && <span>🍳</span>}
                {category === 'decor' && <span>🎨</span>}
                <span>
                  {category === 'all' ? 'All Projects' : 
                   category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <AnimatePresence>
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform cursor-pointer"
              >
                {/* Enhanced Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyatmnhbQWe6eFa8Q2kQy1oQyR+dOMyQsuw8a8qRfv0fv8AQy9E7lZ/nj8iA==."
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button 
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-primary text-white px-6 py-3 rounded-full font-bold transform transition-transform duration-300 shadow-lg"
                    >
                      <span className="flex items-center space-x-2">
                        <span>View Details</span>
                        <span>👁️</span>
                      </span>
                    </motion.button>
                  </div>

                  {/* Enhanced Category badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </motion.div>

                  {/* Enhanced Project Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm font-bold"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <motion.svg 
                        className="w-4 h-4 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </motion.svg>
                      {item.location}
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-6 h-6 bg-gradient-to-r from-primary to-amber-400 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xs">→</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-amber-400/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl mb-4"
            >
              ✨
            </motion.div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your space? Let's create something beautiful together.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(198, 130, 75, 0.35)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:bg-primary-600"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Start Your Project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🏡
                </motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={800}
                  height={600}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyatmnhbQWe6eFa8Q2kQy1oQyR+dOMyQsuw8a8qRfv0fv8AQy9E7lZ/nj8iA==."
                  className="w-full h-96 object-cover rounded-t-3xl"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  ✕
                </motion.button>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{selectedItem.description}</p>
                <div className="flex items-center text-gray-500 mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedItem.location}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-600"
                >
                  Get Similar Design
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio