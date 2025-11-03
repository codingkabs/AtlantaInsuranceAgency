import { Mail, Phone, User } from 'lucide-react';

const agents = [
  {
    name: 'David Kang',
    title: 'Agent Owner',
    phone: '(404) 422-7031',
    email: 'david@tegins.net'
  },
  {
    name: 'Julie',
    title: 'Insurance Agent',
    phone: '',
    email: ''
  },
  {
    name: 'Prakash Patel',
    title: 'Insurance Agent',
    phone: '(404) 667-5689',
    email: 'prakash@tegins.net'
  },
  {
    name: 'Jennifer Kang',
    title: 'Insurance Agent',
    phone: '',
    email: ''
  },
  {
    name: 'Roselin Samnani',
    title: 'Insurance Agent',
    phone: '(678) 629-9353',
    email: 'roselin@tegins.net'
  }
];

export default function OurAgents() {
  return (
    <section id="agents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Agents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of insurance professionals dedicated to serving you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-blue-900" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-6 text-center">{agent.title}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-blue-900 flex-shrink-0" />
                    <span className="truncate">{agent.phone || 'Contact us'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-blue-900 flex-shrink-0" />
                    <span className="truncate">{agent.email || 'Contact us'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
