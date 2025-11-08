import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      image: '/images/portfolio/living-room-1.jpg',
      icon: '🏠',
      title: 'Residential Design',
      description: 'Transform your home into a luxury sanctuary with our personalized residential design services.',
      features: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms'],
      price: 'From $2,500'
    },
    {
      id: 2,
      image: '/images/portfolio/bedroom-1.jpg',
      icon: '🏢',
      title: 'Commercial Design',
      description: 'Create inspiring workspaces that enhance productivity and reflect your brand identity.',
      features: ['Offices', 'Restaurants', 'Hotels', 'Retail Spaces'],
      price: 'From $5,000'
    },
    {
      id: 3,
      image: '/images/gallery/gallery-2.jpg',
      icon: '💼',
      title: 'Design Consultation',
      description: 'Get expert advice and guidance for your interior design project with our consultation services.',
      features: ['Color Schemes', 'Space Planning', 'Style Direction', 'Budget Planning'],
      price: 'From $150/hr'
    },
    {
      id: 4,
      image: '/images/portfolio/kitchen-1.jpg',
      icon: '⚡',
      title: 'Full Renovation',
      description: 'Complete project management from concept to completion with our experienced team.',
      features: ['Project Planning', 'Contractor Coordination', 'Timeline Management', 'Quality Control'],
      price: 'From $10,000'
    },
    {
      id: 5,
      image: '/images/gallery/gallery-5.jpg',
      icon: '🎨',
      title: 'Color Consultation',
      description: 'Professional color expertise to create the perfect palette for your space.',
      features: ['Color Psychology', 'Paint Selection', 'Accent Colors', 'Lighting Coordination'],
      price: 'From $200'
    },
    {
      id: 6,
      image: '/images/gallery/gallery-6.jpg',
      icon: '🪑',
      title: 'Custom Furniture',
      description: 'Bespoke furniture design and manufacturing tailored to your specific needs.',
      features: ['Custom Pieces', 'Space Optimization', 'Premium Materials', 'Artisan Craftsmanship'],
      price: 'From $1,500'
    }
  ]

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-primary/5 to-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-amber-400/5 to-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="bg-primary text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-xs sm:text-sm font-bold">
              🏠 What We Offer
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 px-4"
          >
            Our <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            From concept to completion, we offer comprehensive interior design services 
            tailored to your unique needs and vision.
          </motion.p>
        </div>

        {/* Enhanced Services Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              onClick={() => setSelectedService(service.id)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative mx-auto w-full max-w-sm"
            >
              {/* Floating Number */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg z-10"
              >
                {index + 1}
              </motion.div>

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                
                {/* Animated Icon */}
                <motion.div 
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl"
                  animate={hoveredService === service.id ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                {/* Enhanced Price tag */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {service.price}
                </motion.div>

                {/* Hover Effects */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                      >
                        <span className="text-white text-4xl">✨</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 bg-gradient-to-b from-white via-cream/50 to-amber-50/30">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  style={{ textShadow: '0 1px 1px rgba(0,0,0,0.1)' }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
                
                {/* Enhanced Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={feature} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <motion.div 
                        className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"
                        animate={hoveredService === service.id ? {
                          scale: [1, 1.5, 1],
                        } : {}}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      ></motion.div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all duration-300 border-2 border-gray-200 hover:border-primary"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <motion.span
                      animate={hoveredService === service.id ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Featured Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative bg-gradient-to-r from-primary via-amber-500 to-primary rounded-3xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Content */}
            <div className="p-8 lg:p-12 text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="text-6xl mb-4"
              >
                ⭐
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Home Transformation
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Our signature service that transforms your entire home into a cohesive, 
                luxury living space. From initial consultation to final styling, 
                we handle every detail with precision and care.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '✨ Comprehensive space planning and design',
                  '🎨 3D visualization and mood boards',
                  '🪑 Custom furniture and décor selection',
                  '👥 Professional project management',
                  '🎁 White-glove installation service'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="flex items-center text-white/90"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-full">
              <Image
                src="/images/gallery/gallery-4.jpg"
                alt="Complete Home Transformation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Design Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', icon: '💬' },
              { step: '02', title: 'Design', icon: '✏️' },
              { step: '03', title: 'Implementation', icon: '🔨' },
              { step: '04', title: 'Reveal', icon: '🎉' }
            ].map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + idx * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-r from-primary to-amber-400 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4 shadow-lg"
                >
                  {process.icon}
                </motion.div>
                <div className="text-primary font-bold text-sm mb-2">{process.step}</div>
                <div className="font-semibold text-gray-900">{process.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services