import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: '🏠',
      title: 'Residential Design',
      description: 'Transform your home into a luxury sanctuary with our personalized residential design services.',
      features: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms']
    },
    {
      icon: '🏢',
      title: 'Commercial Design',
      description: 'Create inspiring workspaces that enhance productivity and reflect your brand identity.',
      features: ['Offices', 'Restaurants', 'Hotels', 'Retail Spaces']
    },
    {
      icon: '🎨',
      title: 'Design Consultation',
      description: 'Get expert advice and guidance for your interior design project with our consultation services.',
      features: ['Color Schemes', 'Space Planning', 'Style Direction', 'Budget Planning']
    },
    {
      icon: '⚡',
      title: 'Renovation Management',
      description: 'Complete project management from concept to completion with our experienced team.',
      features: ['Project Planning', 'Contractor Coordination', 'Timeline Management', 'Quality Control']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
          >
            Our <span className="luxury-gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From concept to completion, we offer comprehensive interior design services 
            tailored to your unique needs and vision.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services