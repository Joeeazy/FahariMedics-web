import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What services does your medical facility provide?",
      answer: "We offer a wide range of medical services including general consultations, diagnostic testing, specialist care, preventive health screenings, minor procedures, and chronic disease management. Please visit our services page for a detailed list."
    },
    {
      question: "How can I book an appointment?",
      answer: "Appointments can be scheduled by calling our front desk, booking online through our website, or using our mobile app. Walk-ins are also accepted for certain services based on availability."
    },
    {
      question: "Do you accept insurance and what plans are covered?",
      answer: "Yes, we accept most major insurance providers. Please check our insurance partners list on the website or contact our billing department for verification and coverage details."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid ID, your insurance card, a list of current medications, and any previous medical records or test results relevant to your condition. Arriving 15 minutes early is also recommended."
    },
    {
      question: "Can I get my test results online?",
      answer: "Yes, we provide secure online access to your lab results and medical records through our patient portal. You will receive a notification when your results are available."
    },
    {
      question: "Do you offer telemedicine or virtual consultations?",
      answer: "Yes, we offer virtual consultations for a variety of medical concerns. These appointments can be booked through our website or by phone, and are ideal for follow-ups, general consultations, and non-emergency conditions."
    }
  ];
  

  return (
    <section className="pt-8 pb-20">
      <div className="container-custom">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Get Answers to Common Questions"
          description="Find answers to commonly asked questions about our fertility treatments, procedures, and services."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                className={`w-full text-left p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all ${
                  openIndex === index ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-blue-600 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please contact our friendly team.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900/90 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 