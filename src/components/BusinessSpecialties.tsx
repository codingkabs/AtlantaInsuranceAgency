import { Building2, Fuel, ShoppingCart, Store, HardHat, Shield } from 'lucide-react';

const specialties = [
  { icon: Store, name: 'Liquor Stores' },
  { icon: Fuel, name: 'Gas Stations' },
  { icon: ShoppingCart, name: 'Convenience Stores' },
  { icon: Building2, name: 'Shopping Centers' },
  { icon: HardHat, name: 'Construction Loans' },
  { icon: Shield, name: "Business Owner's Policies (BOP)" }
];

export default function BusinessSpecialties() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Business Insurance Specialists</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We specialize in business insurance solutions for Liquor Stores, Gas Stations, Convenience Stores,
            Shopping Centers, Construction Loans, Business Owner's Policies (BOP), Workers Compensation, and General Liability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <specialty.icon className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{specialty.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-900" />
              Workers Compensation
            </h3>
            <p className="text-gray-600 text-sm">Comprehensive protection for your employees with competitive rates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-900" />
              General Liability
            </h3>
            <p className="text-gray-600 text-sm">Essential coverage to protect your business from liability claims</p>
          </div>
        </div>
      </div>
    </section>
  );
}
