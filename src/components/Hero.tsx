import { Shield, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-300" />
              <span className="text-blue-200 font-medium">Trusted Since 1980</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Independent Insurance Partner
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We work with leading insurance companies to provide you with customized coverage solutions.
              Whether it's personal or commercial insurance, we're here to protect what matters most.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                Get A Free Quote
              </a>
              <a
                href="tel:770-243-4523"
                className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Independent agency with access to multiple carriers',
                  'Personalized service from experienced professionals',
                  'Competitive rates and comprehensive coverage',
                  'Local expertise serving Georgia since 1980',
                  'Fast claims assistance and ongoing support'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
