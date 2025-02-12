import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CountryPage = () => {
  const { countryId } = useParams();
  
  // Demo data since backend is not set up yet
  const demoPlaces = [
    {
      id: 1,
      name: "Eiffel Tower",
      description: "Iconic iron lattice tower located on the Champ de Mars in Paris. One of the world's most recognizable landmarks.",
      imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8
    },
    {
      id: 2,
      name: "Louvre Museum",
      description: "World's largest art museum and a historic monument in Paris. Home to many famous works including the Mona Lisa.",
      imageUrl: "https://images.unsplash.com/photo-1544939514-aa98d908bc47?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7
    },
    {
      id: 3,
      name: "Arc de Triomphe",
      description: "One of the most famous monuments in Paris that honors those who fought and died for France in various wars.",
      imageUrl: "https://images.unsplash.com/photo-1544939514-aa98d908bc47?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6
    }
  ];

  /* Commented out until backend is set up
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(`https://your-api/countries/${countryId}/places`);
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }
        const data = await response.json();
        setPlaces(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [countryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        Error: {error}
      </div>
    );
  }
  */

  return (
    <div className="container min-h-screen mx-auto px-4 py-8 mt-24">
      <h1 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
        Popular Places in {countryId} {/* Hardcoded for demo */}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoPlaces.map((place) => (
          <div key={place.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={place.imageUrl} 
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{place.name}</h2>
              <p className="text-gray-600 mb-4">{place.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-600 font-medium">{place.rating} ★</span>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountryPage