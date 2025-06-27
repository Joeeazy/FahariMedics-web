import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Gallery from './Gallery'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  // Gallery images (medical-themed)
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Our Modern Facility'
    },
    {
      url: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Surgical Department'
    },
    {
      url: 'https://images.unsplash.com/photo-1627855437693-dcc7b0c4ba7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Pediatric Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Orthopedic Treatment'
    },
    {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'General Consultation'
    },
    {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caption: 'Emergency Services'
    }
  ]

  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive primary care services for adults and children, including preventive care, chronic disease management, and health screenings.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Preventive health check-ups",
        "Chronic disease management",
        "Vaccinations and immunizations",
        "Health education and counseling",
        "Diagnostic services"
      ],
      pricing: [
        { service: "General Consultation", price: "KSh 1,500" },
        { service: "Comprehensive Check-up", price: "KSh 5,000" },
        { service: "Chronic Disease Management", price: "KSh 3,500 per visit" }
      ],
      offers: ["Free BP check on first visit", "10% discount for seniors"]
    },
    {
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents, focusing on growth, development, and childhood illnesses.",
      image: "/images/services/peditrics.jpg",
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: [
        "Well-child visits",
        "Growth and development monitoring",
        "Childhood vaccinations",
        "Nutritional counseling",
        "Acute illness care"
      ],
      pricing: [
        { service: "Child Wellness Check", price: "KSh 2,000" },
        { service: "Vaccination Package", price: "KSh 3,500" },
        { service: "Newborn Care", price: "KSh 4,000" }
      ],
      offers: ["Free growth chart", "15% discount on vaccination packages"]
    },
    {
      title: "Gynecology",
      description: "Comprehensive women's health services including reproductive health, family planning, and preventive screenings.",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      features: [
        "Annual well-woman exams",
        "Family planning services",
        "Prenatal and postnatal care",
        "Gynecological cancer screening",
        "Menopause management"
      ],
      pricing: [
        { service: "Annual Check-up", price: "KSh 3,500" },
        { service: "Prenatal Care Package", price: "KSh 25,000" },
        { service: "Family Planning Consultation", price: "KSh 2,000" }
      ],
      offers: ["Free cervical cancer screening", "10% discount on prenatal packages"]
    },
    {
      title: "General Surgery",
      description: "Advanced surgical procedures for various conditions, performed by experienced surgeons in modern facilities.",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
        </svg>
      ),
      features: [
        "Minimally invasive procedures",
        "Laparoscopic surgery",
        "Emergency surgical care",
        "Gastrointestinal surgery",
        "Post-operative rehabilitation"
      ],
      pricing: [
        { service: "Consultation", price: "KSh 2,500" },
        { service: "Minor Procedure", price: "KSh 15,000" },
        { service: "Major Surgery", price: "From KSh 50,000" }
      ],
      offers: ["Free post-op check", "Payment plans available"]
    },
    {
      title: "Orthopedics",
      description: "Specialized care for musculoskeletal conditions including bones, joints, ligaments, tendons and muscles.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      features: [
        "Joint pain management",
        "Fracture care",
        "Sports injury treatment",
        "Arthritis management",
        "Physical therapy referrals"
      ],
      pricing: [
        { service: "Consultation", price: "KSh 2,500" },
        { service: "Fracture Treatment", price: "From KSh 10,000" },
        { service: "Joint Injection", price: "KSh 7,500" }
      ],
      offers: ["Free initial assessment", "10% discount for athletes"]
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services for acute illnesses and injuries, with rapid response and expert care.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: (
        <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      features: [
        "24/7 emergency services",
        "Trauma care",
        "Acute illness treatment",
        "Emergency surgical services",
        "Critical care stabilization"
      ],
      pricing: [
        { service: "Emergency Consultation", price: "KSh 3,000" },
        { service: "Trauma Care", price: "From KSh 15,000" },
        { service: "Stabilization", price: "From KSh 10,000" }
      ],
      offers: ["Immediate attention guarantee", "Ambulance services available"]
    }
  ]

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Medical Services"
            subtitle="Comprehensive Healthcare Solutions"
            description="FahariMedics offers a wide range of medical services delivered by experienced professionals using modern technology to ensure the best possible outcomes for our patients."
            titleColor="text-blue-800"
            subtitleColor="text-blue-600"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer border border-blue-100"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.backgroundColor = '#f0f9ff';
                      e.target.style.display = 'flex';
                      e.target.style.justifyContent = 'center';
                      e.target.style.alignItems = 'center';
                      e.target.innerHTML = '<p class="text-blue-700">Service Image</p>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center">
                      <div className="bg-blue-700 p-2 rounded-lg mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-white text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.offers.length > 0 && (
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                        {service.offers[0]}
                      </span>
                    </div>
                  )}
                  <button
                    className="mt-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors flex items-center"
                  >
                    View Details
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Modal */}
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  onError={(e) => {
                    e.target.style.backgroundColor = '#f0f9ff';
                    e.target.style.display = 'flex';
                    e.target.style.justifyContent = 'center';
                    e.target.style.alignItems = 'center';
                    e.target.innerHTML = '<p class="text-blue-700">Service Image</p>';
                  }}
                />
                <p className="text-gray-600 mb-6">{selectedService.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-blue-800">Service Features:</h4>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-blue-800">Pricing:</h4>
                    <ul className="space-y-3">
                      {selectedService.pricing.map((item, index) => (
                        <li key={index} className="flex justify-between text-gray-600 border-b border-blue-50 pb-2">
                          <span>{item.service}</span>
                          <span className="font-medium">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {selectedService.offers.length > 0 && (
                      <>
                        <h4 className="font-semibold text-lg mt-6 mb-4 text-blue-800">Special Offers:</h4>
                        <ul className="space-y-2">
                          {selectedService.offers.map((offer, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{offer}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Link
                    to="/appointment"
                    className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Facility Gallery"
            subtitle="Modern Healthcare Environment"
            description="Explore our state-of-the-art medical facilities designed for your comfort and optimal care."
            titleColor="text-blue-800"
            subtitleColor="text-blue-600"
          />
          <Gallery images={galleryImages} />
        </div>
      </section> */}
    </>
  )
}

export default Services