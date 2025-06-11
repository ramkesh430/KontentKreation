import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/Kontentkreationlogo.webp" 
              alt="Kontent Kreation LLC" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Helping South Asian businesses thrive in the digital world with culturally-aware marketing strategies and proven results.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin size={16} />
              <span>Based in Seattle, Washington</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Phone size={16} />
              <a href="tel:+14257378565" className="hover:text-white transition-colors">
                +1 (425) 737-8565
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={16} />
              <a href="mailto:kontentkreationllc@gmail.com" className="hover:text-white transition-colors">
                kontentkreationllc@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Meta Ads Management</li>
              <li>Google Ads Campaigns</li>
              <li>Local SEO & GMB</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Kontent Kreation LLC. All rights reserved. | Serving South Asian-owned businesses across the United States.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;