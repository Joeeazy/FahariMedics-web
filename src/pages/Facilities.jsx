import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeader from "../components/SectionHeader"

const Facilities = () => {
  const [activeTab, setActiveTab] = useState('departments')

  const departments = [
    {
      name: "General Medicine",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Comprehensive primary care services with modern diagnostic facilities.",
      features: [
        "Advanced diagnostic equipment",
        "Private consultation rooms",
        "Chronic disease management",
        "Preventive health services"
      ]
    },
    {
      name: "Emergency Department",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "24/7 emergency care facility with rapid response teams.",
      features: [
        "Trauma care unit",
        "Critical care beds",
        "Advanced life support",
        "Immediate diagnostic services"
      ]
    },
    {
      name: "Diagnostic Center",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "State-of-the-art imaging and laboratory services.",
      features: [
        "Digital X-ray and ultrasound",
        "CT and MRI scanning",
        "Fully equipped laboratory",
        "Quick test results"
      ]
    }
  ]

  const infrastructure = [
    {
      name: "Operation Theaters",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Modern surgical suites with advanced technology.",
      features: [
        "Laminar airflow systems",
        "Digital integration",
        "Advanced anesthesia",
        "Post-op recovery"
      ]
    },
    {
      name: "Patient Wards",
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Comfortable inpatient facilities for recovery.",
      features: [
        "Private and semi-private rooms",
        "24/7 nursing care",
        "Modern amenities",
        "Family visiting areas"
      ]
    },
    {
      name: "Hospital Campus",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Modern healthcare facility designed for patient comfort.",
      features: [
        "Spacious environment",
        "Easy navigation",
        "Ample parking",
        "Landscaped gardens"
      ]
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Hospital Facilities"
          subtitle="Modern Healthcare Environment"
          description="FahariMedics offers state-of-the-art medical facilities designed to provide exceptional care in a comfortable and healing environment."
          titleColor="text-blue-800"
          subtitleColor="text-blue-600"
        />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-blue-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'departments'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              Departments
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'infrastructure'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-blue-600 hover:text-blue-800'
              }`}
            >
              Infrastructure
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'departments' ? (
            <>
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group border border-blue-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.backgroundColor = '#f0f9ff';
                        e.target.style.display = 'flex';
                        e.target.style.justifyContent = 'center';
                        e.target.style.alignItems = 'center';
                        e.target.innerHTML = '<p class="text-blue-700">Facility Image</p>';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{dept.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <ul className="space-y-2">
                      {dept.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {infrastructure.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group border border-blue-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.backgroundColor = '#f0f9ff';
                        e.target.style.display = 'flex';
                        e.target.style.justifyContent = 'center';
                        e.target.style.alignItems = 'center';
                        e.target.innerHTML = '<p class="text-blue-700">Facility Image</p>';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{item.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Experience Our Facilities
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule a visit to FahariMedics and see our world-class healthcare facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-800 transition-colors"
            >
              Book a Tour
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 transition-colors border border-blue-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Facilities