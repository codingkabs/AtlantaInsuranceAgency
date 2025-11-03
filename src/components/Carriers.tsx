const carriers = [
  {
    name: 'The Hanover Insurance Group',
    logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'The Hartford',
    logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Mercury Insurance',
    logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Nationwide',
    logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Progressive',
    logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Travelers',
    logo: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Carriers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Carriers We Work With</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with leading insurance companies to bring you the best coverage options and competitive rates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
          {carriers.map((carrier, index) => (
            <div
              key={index}
              className="w-full h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center p-6"
            >
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">{carrier.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
