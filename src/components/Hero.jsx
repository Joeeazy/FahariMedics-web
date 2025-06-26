import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Background Image - Updated to medical-themed image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Blue overlay for brand consistency */}
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
            Quality Healthcare at <span className="text-blue-300">FahariMedics</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-medium text-blue-100 drop-shadow-lg">
            Compassionate medical care for you and your family in Kenya
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/appointment"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Book Appointment
            </Link>
            <Link 
              to="/services"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl text-center border border-blue-200"
            >
              Our Services
            </Link>
          </div>
          
          {/* Emergency contact badge */}
          <div className="mt-8 bg-red-600/60 text-white inline-block px-4 py-2 rounded-full shadow-lg">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Emergency: 0700 000 000
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;