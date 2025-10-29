import { Award, Shield, Users, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years of Experience', value: '44+' },
  { icon: Users, label: 'Happy Clients', value: '2,500+' },
  { icon: Shield, label: 'Insurance Partners', value: '15+' },
  { icon: TrendingUp, label: 'Claims Processed', value: '5,000+' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Serving Georgia Since 1980
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Atlanta Insurance Agency has been providing exceptional insurance services to individuals
                and businesses throughout Georgia for over four decades. We've built a reputation for
                personalized service and expert guidance.
              </p>
              <p className="text-lg">
                As an independent insurance agency, we have the unique advantage of working with multiple
                top-rated insurance carriers. This means we can shop the market on your behalf to find
                the best coverage at the most competitive rates.
              </p>
              <p className="text-lg">
                Our commitment goes beyond just selling policies. We're here to help you understand your
                coverage, assist with claims, and adjust your insurance as your needs change over time.
                When you work with us, you get a trusted advisor dedicated to protecting what matters most to you.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Track Record</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-900" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
