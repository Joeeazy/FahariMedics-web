import React, { useState } from 'react';

// TODO: Set up your Formspree form with the recipient email marksspe.20@gmail.com and use the endpoint below:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpwrdbyr'; // Replace with your actual Formspree endpoint for marksspe.20@gmail.com

const PartnerForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDebugInfo(null);

    try {
      const formData = new FormData(e.target);
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      
      setDebugInfo('Sending data: ' + JSON.stringify(formDataObj));
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const responseData = await response.json();
      setDebugInfo(prev => prev + '\nResponse: ' + JSON.stringify(responseData));

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        throw new Error(responseData.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err.message);
      setDebugInfo(prev => prev + '\nError: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 min-h-screen">
      <div className="container-custom max-w-xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Become a Partner</h1>
        {submitted ? (
          <div className="text-center text-green-700 font-semibold text-lg">
            Thank you for your interest! We will contact you soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            {debugInfo && (
              <div className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-3 rounded-lg whitespace-pre-wrap text-sm">
                {debugInfo}
              </div>
            )}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder-gray-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder-gray-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Organization *</label>
              <input
                type="text"
                name="organization"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder-gray-500"
                placeholder="Enter your organization name"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder-gray-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-gray-900 placeholder-gray-500"
                placeholder="Tell us more about your partnership interest..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Partnership Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default PartnerForm;