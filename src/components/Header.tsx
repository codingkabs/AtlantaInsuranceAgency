import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:770-243-4523" className="flex items-center gap-1 hover:text-blue-200">
              <Phone className="w-4 h-4" />
              <span>Office: (770) 243-4523</span>
            </a>
            <a href="tel:404-422-7031" className="flex items-center gap-1 hover:text-blue-200">
              <Phone className="w-4 h-4" />
              <span>Cell: (404) 422-7031</span>
            </a>
          </div>
          <a href="mailto:david@tegins.net" className="flex items-center gap-1 hover:text-blue-200">
            <Mail className="w-4 h-4" />
            <span>david@tegins.net</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              <span className="block text-sm font-normal text-gray-600">Since 1980</span>
              <span>Atlanta Insurance Agency</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium">Home</a>
            <a href="#personal" className="text-gray-700 hover:text-blue-900 font-medium">Personal Insurance</a>
            <a href="#commercial" className="text-gray-700 hover:text-blue-900 font-medium">Commercial Insurance</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact</a>
            <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
              Get A Quote
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-900 font-medium py-2">Home</a>
            <a href="#personal" className="block text-gray-700 hover:text-blue-900 font-medium py-2">Personal Insurance</a>
            <a href="#commercial" className="block text-gray-700 hover:text-blue-900 font-medium py-2">Commercial Insurance</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-900 font-medium py-2">About Us</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-900 font-medium py-2">Contact</a>
            <a href="#contact" className="block bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors text-center">
              Get A Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
