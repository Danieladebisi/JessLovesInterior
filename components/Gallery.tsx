import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
  location: string
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState('all')

  // Gallery images using your beautiful local images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/portfolio/living-room-1.jpg',
      alt: 'Modern sofa and armchairs arrangement',
      category: 'living-room',
      title: 'Contemporary Living Space',
      location: 'Groton, CT'
    },
    {
      id: 2,
      src: '/images/portfolio/bedroom-1.jpg',
      alt: 'Modern bedroom with beautiful lighting',
      category: 'bedroom',
      title: 'Light & Airy Bedroom',
      location: 'Groton, CT'
    },
    {
      id: 3,
      src: '/images/portfolio/kitchen-1.jpg',
      alt: 'Wooden bar counter with chairs',
      category: 'kitchen',
      title: 'Modern Bar Kitchen',
      location: 'Groton, CT'
    },
    {
      id: 4,
      src: '/images/portfolio/living-room-2.jpg',
      alt: 'Interiors of modern living room',
      category: 'living-room',
      title: 'Modern Living Excellence',
      location: 'Groton, CT'
    },
    {
      id: 5,
      src: '/images/portfolio/living-room-3.jpg',
      alt: 'Eclectic living room with velvet furniture',
      category: 'living-room',
      title: 'Eclectic Comfort',
      location: 'Groton, CT'
    },
    {
      id: 6,
      src: '/images/portfolio/bedroom-2.jpg',
      alt: 'Luxury children relaxation area',
      category: 'bedroom',
      title: 'Luxury Kids Space',
      location: 'Groton, CT'
    },
    {
      id: 7,
      src: '/images/gallery/gallery-1.jpg',
      alt: 'Artistic photo frame arrangement',
      category: 'decor',
      title: 'Artistic Lounge Decor',
      location: 'Groton, CT'
    },
    {
      id: 8,
      src: '/images/gallery/gallery-2.jpg',
      alt: 'Designer black lamp above table',
      category: 'decor',
      title: 'Designer Lighting',
      location: 'Groton, CT'
    },
    {
      id: 9,
      src: '/images/gallery/gallery-3.jpg',
      alt: 'Elegant coffee table styling',
      category: 'decor',
      title: 'Coffee Table Styling',
      location: 'Groton, CT'
    },
    {
      id: 10,
      src: '/images/gallery/gallery-4.jpg',
      alt: 'Black sofa with patterned pillows',
      category: 'living-room',
      title: 'Bold Pattern Play',
      location: 'Groton, CT'
    },
    {
      id: 11,
      src: '/images/gallery/gallery-5.jpg',
      alt: 'Multifunctional living room interior',
      category: 'living-room',
      title: 'Multifunctional Design',
      location: 'Groton, CT'
    },
    {
      id: 12,
      src: '/images/gallery/gallery-6.jpg',
      alt: 'Cozy scandinavian room with natural light',
      category: 'living-room',
      title: 'Scandinavian Serenity',
      location: 'Groton, CT'
    }
  ]

  const categories = ['all', 'living-room', 'bedroom', 'kitchen', 'decor']

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Design Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning interior transformations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.location}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {image.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedImage.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {selectedImage.category.replace('-', ' ')}
                    </span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery