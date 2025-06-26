import { Link } from 'react-router-dom';
import logo from '../assets/logo.jfif';

const Footer = () => {
  const links = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Facilities', path: '/facilities' },
      { name: 'Contact', path: '/contact' }
    ],
    others: [
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Partners', path: '/partners' }
    ],
    services: [
      'General Medicine',
      'Pediatrics',
      'Gynecology',
      'Emergency Care',
      'Diagnostic Services'
    ]
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Hospital Info */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="FahariMedics Logo" 
                className="w-12 h-12 rounded-lg object-contain" 
              />
              <div>
                <h3 className="font-bold text-xl text-gray-300">FahariMedics</h3>
                <p className="text-sm text-blue-200">Healthcare Services</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6">
              Providing quality healthcare services with compassion and excellence in Kenya.
            </p>
            <div className="space-y-3">
              <p className="flex items-start text-blue-200">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                BuruBuru, Phase4, Kenya
              </p>
              <p className="flex items-start text-blue-200">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0700 000 000 / 0700 001 000
              </p>
              <p className="flex items-start text-blue-200">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@faharimedics.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {links.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {links.others.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {links.services.map((service) => (
                <li key={service} className="text-blue-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-blue-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} FahariMedics Healthcare. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;