import React from 'react'

const Associations = () => {
  const partners = [
    {
      id: 1,
      name: "National Geographic",
      logo: "/src/assets/L1.avif",
      description: "Official Expedition Partner"
    },
    {
      id: 2, 
      name: "World Wildlife Fund",
      logo: "/src/assets/L2.png",
      description: "Conservation Partner"
    },
    {
      id: 3,
      name: "International Mountain Guides",
      logo: "/src/assets/L1.avif", 
      description: "Safety & Training Partner"
    }
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase">Our Network</h2>
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted Partners & Associations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center bg-white rounded-lg p-8 shadow-md transition-transform duration-300 hover:scale-105">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto mb-6 object-contain rounded-full"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h4>
              <p className="text-gray-600 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations