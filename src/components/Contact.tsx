import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Quote Request: ${formData.insuranceType}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AInsurance Type: ${formData.insuranceType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:david@tegins.net?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact us today for a free quote or to learn more about our services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Office Location</div>
                    <div className="text-gray-600">
                      3459 Lawrenceville-Suwanee Rd<br />
                      Suite A&B<br />
                      Suwanee, GA 30024
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone Numbers</div>
                    <div className="text-gray-600">
                      Office: <a href="tel:770-243-4523" className="text-blue-900 hover:underline">(770) 243-4523</a><br />
                      Cell: <a href="tel:404-422-7031" className="text-blue-900 hover:underline">(404) 422-7031</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:david@tegins.net" className="text-blue-900 hover:underline">
                      david@tegins.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Get A Quote From Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Compare rates from multiple top-rated carriers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Free, no-obligation quotes within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Expert advice from experienced professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">•</span>
                  <span>Personalized coverage recommendations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request A Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Type *
                </label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  required
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="">Select Insurance Type</option>
                  <option value="Auto Insurance">Auto Insurance</option>
                  <option value="Home Insurance">Home Insurance</option>
                  <option value="Life Insurance">Life Insurance</option>
                  <option value="Boat Insurance">Boat Insurance</option>
                  <option value="Motorcycle Insurance">Motorcycle Insurance</option>
                  <option value="Renters Insurance">Renters Insurance</option>
                  <option value="Commercial Insurance">Commercial Insurance</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Tell us about your insurance needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
