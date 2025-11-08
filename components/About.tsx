import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Jes Love's Interior</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          With over 15 years of experience in luxury interior design, we create stunning spaces that reflect your personality and lifestyle.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/hero1.jpg"
              alt="Jessica working on interior design"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900">Our Design Philosophy</h3>
          <p className="text-gray-600 leading-relaxed">
            At Jes Love's Interior, we believe that your home should tell your story. Every space we design is carefully crafted to reflect your unique personality while maintaining functionality and timeless elegance.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/gallery-2.jpg"
                alt="Design process"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/gallery-3.jpg"
                alt="Material selection"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Why Choose Us?</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                15+ years of professional experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Award-winning design portfolio
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Personalized design approach
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Full-service project management
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Team Section with Images */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative h-64 w-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
              <Image
                src="/images/hero/hero2.jpg"
                alt="Jessica Love - Lead Designer"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl mb-2">Jessica Love</h4>
            <p className="text-primary font-medium mb-2">Lead Interior Designer</p>
            <p className="text-gray-600 text-sm">15+ years experience in luxury residential design</p>
          </div>
          
          <div className="text-center">
            <div className="relative h-64 w-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
              <Image
                src="/images/hero/hero3.jpg"
                alt="Michael Chen - Project Manager"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl mb-2">Michael Chen</h4>
            <p className="text-primary font-medium mb-2">Project Manager</p>
            <p className="text-gray-600 text-sm">Specialist in project coordination and client relations</p>
          </div>
          
          <div className="text-center">
            <div className="relative h-64 w-48 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
              <Image
                src="/images/hero/hero4.jpg"
                alt="Sarah Williams - Design Assistant"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl mb-2">Sarah Williams</h4>
            <p className="text-primary font-medium mb-2">Design Assistant</p>
            <p className="text-gray-600 text-sm">Expert in space planning and 3D visualization</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default About