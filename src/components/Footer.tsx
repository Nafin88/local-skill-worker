import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SkillHub</h3>
            <p className="text-gray-300 mb-4">
              Connecting skilled professionals with the people who need them. Find reliable service providers for all your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-300 hover:text-white transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/jobs?category=plumber" className="text-gray-300 hover:text-white transition-colors">
                  Plumbers
                </Link>
              </li>
              <li>
                <Link to="/jobs?category=painter" className="text-gray-300 hover:text-white transition-colors">
                  Painters
                </Link>
              </li>
              <li>
                <Link to="/jobs?category=carpenter" className="text-gray-300 hover:text-white transition-colors">
                  Carpenters
                </Link>
              </li>
              <li>
                <Link to="/jobs?category=cooking" className="text-gray-300 hover:text-white transition-colors">
                  Cooking
                </Link>
              </li>
              <li>
                <Link to="/jobs?category=electrician" className="text-gray-300 hover:text-white transition-colors">
                  Electricians
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>support@skillhub.in</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 12345 67890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SkillHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;