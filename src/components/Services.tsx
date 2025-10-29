import { Car, Home, Heart, Ship, Bike, Building2, Users, HardHat, FileText, Truck, Factory, Briefcase } from 'lucide-react';

const personalServices = [
  { icon: Car, title: 'Auto Insurance', description: 'Comprehensive coverage for your vehicles with competitive rates' },
  { icon: Home, title: 'Home Insurance', description: 'Protect your home and belongings from unexpected events' },
  { icon: Heart, title: 'Life Insurance', description: 'Secure your family\'s financial future with life insurance' },
  { icon: Ship, title: 'Boat Insurance', description: 'Coverage for your watercraft and marine equipment' },
  { icon: Bike, title: 'Motorcycle Insurance', description: 'Specialized protection for your motorcycle' },
  { icon: Building2, title: 'Renters Insurance', description: 'Affordable coverage for your personal property' }
];

const commercialServices = [
  { icon: Briefcase, title: 'General Liability', description: 'Essential protection for your business operations' },
  { icon: Users, title: 'Workers Compensation', description: 'Required coverage for your employees' },
  { icon: Factory, title: 'Property Coverage', description: 'Protect your business property and equipment' },
  { icon: Truck, title: 'Commercial Auto', description: 'Coverage for your business vehicles and fleet' },
  { icon: HardHat, title: 'Contractors Insurance', description: 'Specialized coverage for construction professionals' },
  { icon: FileText, title: 'Professional Liability', description: 'Protection against claims of professional negligence' }
];

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-900" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      <section id="personal" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Personal Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive insurance solutions to protect you and your family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="commercial" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored business insurance to protect your company and employees
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
