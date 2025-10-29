import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Atlanta Insurance Agency</h3>
            <p className="text-gray-400 mb-4">
              Serving Georgia with trusted insurance solutions since 1980. As an independent agency,
              we work for you, not the insurance companies.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Office: (770) 243-4523</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Cell: (404) 422-7031</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:david@tegins.net" className="hover:text-white">david@tegins.net</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Personal Insurance</h4>
            <ul className="space-y-2">
              <li><a href="#personal" className="hover:text-white transition-colors">Auto Insurance</a></li>
              <li><a href="#personal" className="hover:text-white transition-colors">Home Insurance</a></li>
              <li><a href="#personal" className="hover:text-white transition-colors">Life Insurance</a></li>
              <li><a href="#personal" className="hover:text-white transition-colors">Boat Insurance</a></li>
              <li><a href="#personal" className="hover:text-white transition-colors">Motorcycle Insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Commercial Insurance</h4>
            <ul className="space-y-2">
              <li><a href="#commercial" className="hover:text-white transition-colors">General Liability</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors">Workers Comp</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors">Property Coverage</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors">Commercial Auto</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors">Professional Liability</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>3459 Lawrenceville-Suwanee Rd, Suite A&B, Suwanee, GA 30024</span>
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Atlanta Insurance Agency. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
