import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendWhatsAppNotification, sendSMSNotification } from '../services/notifications';

const Appointment = () => {
  const [formData, setFormData] = useState({
    patientType: 'new', // new or existing
    name: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    // New patient fields
    dateOfBirth: '',
    gender: '',
    residence: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const departments = [
    'General Medicine',
    'Cardiology',
    'Pediatrics',
    'Orthopedics',
    'Gynecology',
    'Dental',
    'Ophthalmology'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send notifications
      const [whatsappSuccess, smsSuccess] = await Promise.all([
        sendWhatsAppNotification(formData),
        sendSMSNotification(formData)
      ]);

      if (whatsappSuccess && smsSuccess) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          patientType: 'new',
          name: '',
          phone: '',
          date: '',
          time: '',
          department: '',
          dateOfBirth: '',
          gender: '',
          residence: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get available time slots (9 AM to 5 PM, 30-minute intervals)
  const getTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 17; i++) {
      slots.push(`${i}:00`);
      slots.push(`${i}:30`);
    }
    return slots;
  };

  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Book an Appointment
          </h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto font-medium leading-relaxed">
            Schedule your visit with our experienced medical professionals. We're here to provide you with the best care possible.
          </p>
        </div>

        {/* Appointment Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100"
        >
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700">
                Appointment request submitted successfully! We will contact you shortly.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">
                There was an error submitting your appointment request. Please try again or contact us directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Patient Type Selection */}
            <div className="flex justify-center space-x-8 mb-8">
              <label className="inline-flex items-center cursor-pointer hover:opacity-90 transition-opacity">
                <input
                  type="radio"
                  name="patientType"
                  value="new"
                  checked={formData.patientType === 'new'}
                  onChange={handleChange}
                  className="form-radio h-6 w-6 text-blue-600"
                />
                <span className="ml-3 text-lg text-gray-900 font-semibold">New Patient</span>
              </label>
              <label className="inline-flex items-center cursor-pointer hover:opacity-90 transition-opacity">
                <input
                  type="radio"
                  name="patientType"
                  value="existing"
                  checked={formData.patientType === 'existing'}
                  onChange={handleChange}
                  className="form-radio h-6 w-6 text-blue-600"
                />
                <span className="ml-3 text-lg text-gray-900 font-semibold">Old Patient</span>
              </label>
            </div>

            {/* Section Title */}
            <div className="border-b border-gray-200 pb-2 mb-6">
              <h2 className="text-xl font-bold text-blue-600">Personal Information</h2>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Phone Number <span className="text-blue-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* New Patient Fields */}
            {formData.patientType === 'new' && (
              <>
                {/* Section Title */}
                <div className="border-b border-gray-200 pb-2 mb-6">
                  <h2 className="text-xl font-bold text-blue-600">Additional Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">
                      Date of Birth <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      max={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">
                      Gender <span className="text-blue-600">*</span>
                    </label>
                    <select
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">
                      Residence <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="residence"
                      required
                      value={formData.residence}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-500"
                      placeholder="Enter your residence"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Section Title */}
            <div className="border-b border-gray-200 pb-2 mb-6">
              <h2 className="text-xl font-bold text-blue-600">Appointment Details</h2>
            </div>

            {/* Appointment Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Preferred Date <span className="text-blue-600">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900"
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Preferred Time <span className="text-blue-600">*</span>
                </label>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900"
                >
                  <option value="">Select Time</option>
                  {getTimeSlots().map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-900 mb-2">
                  Department <span className="text-blue-600">*</span>
                </label>
                <select
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900"
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors text-gray-900 placeholder-gray-500"
                placeholder="Please provide any additional information or specific concerns..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Appointment'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-800 font-medium">
            For emergency cases, please call
            <a
              href="tel:+233597328517"
              className="text-blue-600 font-bold ml-2 hover:underline"
            >
              0708892999, 0705045861
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;