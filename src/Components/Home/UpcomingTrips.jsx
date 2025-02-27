import React from 'react';
import Himalayas from "../../assets/Himalayas.jpg"
import Amazon from "../../assets/Amazon.jpg"
import Africa from "../../assets/Africa.jpeg"

const UpcomingTrips = () => {
  const upcomingTrips = [
    {

      id: 1,
      title: "Himalayan Adventure Trek",
      date: "15-25 Dec 2023",
      location: "Nepal",
      price: "$2,499",
      image: Himalayas,
    },
    {
      id: 2, 

      title: "Amazon Rainforest Expedition",
      date: "5-15 Jan 2024",
      location: "Brazil",
      price: "$3,299",
      image: Amazon,
    },
    {
      id: 3,

      title: "African Safari Tour",
      date: "20-30 Jan 2024", 
      location: "Kenya",
      price: "$4,199",
      image: Africa,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Upcoming Expeditions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingTrips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-48">
                <img 
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{trip.title}</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {trip.location}
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="h-5 w-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {trip.date}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">{trip.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;