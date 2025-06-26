import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiFillPhone, AiOutlineMail, AiOutlineClockCircle, AiOutlineEnvironment } from 'react-icons/ai'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      title: 'Our Location',
      details: ['BuruBuru, Phase4', 'Before Mutindwa Market'],
      icon: <AiOutlineEnvironment className="w-6 h-6" />
    },
    {
      title: 'Contact Numbers',
      details: ['Emergency: 0700 000 000', 'Appointments: 0700 001 000'],
      icon: <AiFillPhone className="w-6 h-6" />
    },
    {
      title: 'Email Address',
      details: ['info@faharimedics.com', 'appointments@faharimedics.com'],
      icon: <AiOutlineMail className="w-6 h-6" />
    },
    {
      title: 'Working Hours',
      details: ['Monday - Sunday', '24/7 Emergency Services'],
      icon: <AiOutlineClockCircle className="w-6 h-6" />
    }
  ]

  const departments = [
    'General Medicine',
    'Pediatrics',
    'Gynecology',
    'Emergency Care',
    'Diagnostic Services',
    'Surgical Services',
    'Orthopedics'
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg mb-3 block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            We're Here to Help You
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Have questions or need to schedule an appointment? Reach out to us using the contact information below or fill out the form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-100"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Emergency Services
              </h3>
              <p className="text-gray-600 mb-6">
                Our emergency department is available 24/7. For medical emergencies, please call our emergency hotline or visit immediately.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white">
                  <AiFillPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Emergency Hotline</p>
                  <p className="text-xl font-bold text-blue-700">
                    0700 000 000 / 0700 001 000
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section - Now at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 mt-16"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Find Us on the Map</h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8135999999997!2d36.8766!3d-1.2834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d5e5e5e5e5%3A0x182f10d5e5e5e5e5!2sBuruBuru%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
              title="Fahari Medics Location in BuruBuru"
            ></iframe>
          </div>
          <p className="mt-4 text-gray-600">
            We are located in BuruBuru Phase 4, just before Mutindwa Market. Our facility is easily accessible with ample parking space available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact