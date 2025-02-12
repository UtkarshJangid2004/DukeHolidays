import React, { useState } from 'react'

const Offers = () => {
  // Demo package data - will be replaced with backend data later
  const demoPackages = {
    inbound: [
      {
        id: 1,
        title: "Kerala Backwaters Tour",
        description: "Experience the serene backwaters of Kerala",
        duration: "5 days",
        price: "₹25,000",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80"
      },
      {
        id: 2,
        title: "Rajasthan Heritage Tour", 
        description: "Explore the royal palaces and forts of Rajasthan",
        duration: "7 days",
        price: "₹35,000",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80"
      }
    ],
    outbound: [
      {
        id: 3,
        title: "Dubai Adventure",
        description: "Experience the luxury and adventure of Dubai",
        duration: "6 days",
        price: "₹75,000",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
      },
      {
        id: 4,
        title: "Thailand Beach Holiday",
        description: "Relax on the beautiful beaches of Thailand",
        duration: "5 days",
        price: "₹45,000",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80"
      }
    ],
    pilgrimage: [
      {
        id: 5,
        title: "Char Dham Yatra",
        description: "Sacred journey to the four divine destinations",
        duration: "12 days",
        price: "₹55,000",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80"
      },
      {
        id: 6,
        title: "Varanasi Spiritual Tour",
        description: "Experience the spiritual essence of Varanasi",
        duration: "4 days",
        price: "₹20,000",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80"
      }
    ],
    trekking: [
      {
        id: 7,
        title: "Valley of Flowers Trek",
        description: "Trek through the beautiful Valley of Flowers",
        duration: "6 days",
        price: "₹30,000",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
      },
      {
        id: 8,
        title: "Kedarkantha Trek",
        description: "Adventure trek in the Himalayas",
        duration: "5 days",
        price: "₹25,000",
        image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&q=80"
      }
    ]
  };

  /* Commented out until backend is set up
  const [packages, setPackages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('your-api-endpoint/packages');
        if (!response.ok) {
          throw new Error('Failed to fetch packages');
        }
        const data = await response.json();
        setPackages(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);
  */

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 mt-16 sm:mt-20 lg:mt-24">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600 mb-6 sm:mb-8 lg:mb-10 text-center">
        Travel Packages
      </h1>

      {/* India Inbound/Domestic Section */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">India Inbound/Domestic Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {demoPackages.inbound.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-48 sm:h-56">
                <img src={pkg.image} alt={pkg.title} className="absolute w-full h-full object-cover"/>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-indigo-600 font-semibold">{pkg.duration}</span>
                  <span className="text-gray-800 font-bold">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* International Section */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">International Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {demoPackages.outbound.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-48 sm:h-56">
                <img src={pkg.image} alt={pkg.title} className="absolute w-full h-full object-cover"/>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-indigo-600 font-semibold">{pkg.duration}</span>
                  <span className="text-gray-800 font-bold">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pilgrimage Section */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Pilgrimage Tours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {demoPackages.pilgrimage.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-48 sm:h-56">
                <img src={pkg.image} alt={pkg.title} className="absolute w-full h-full object-cover"/>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-indigo-600 font-semibold">{pkg.duration}</span>
                  <span className="text-gray-800 font-bold">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trekking Section */}
      <section className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Treks and Hikes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {demoPackages.trekking.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-48 sm:h-56">
                <img src={pkg.image} alt={pkg.title} className="absolute w-full h-full object-cover"/>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <span className="text-indigo-600 font-semibold">{pkg.duration}</span>
                  <span className="text-gray-800 font-bold">{pkg.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Offers