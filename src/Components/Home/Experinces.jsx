import React from 'react'
import Ex1 from "../../assets/Ex1.jpg"
import Ex2 from "../../assets/Ex2.jpeg"
import Ex3 from "../../assets/Ex3.jpg"

const Experinces = () => {
  const testimonials = [
    {

      id: 1,
      name: "Sarah Johnson",
      trip: "Himalayan Adventure Trek",
      quote: "An incredible journey that pushed my limits. The guides were exceptional and the views were breathtaking!",
      image: Ex1,
      rating: 3

    },
    {
      id: 2,
      name: "Michael Chen",
      trip: "Amazon Rainforest Expedition",
      quote: "Apollo Expeditions provided an unforgettable adventure. The attention to detail and local knowledge made this trip special.",
      image: Ex2,
      rating: 5


    },
    {
      id: 3,
      name: "Emma Williams",
      trip: "African Safari Tour",
      quote: "From start to finish, an amazing experience. Saw incredible wildlife and stayed in beautiful accommodations.",
      image: Ex3,
      rating: 4


    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase">Testimonials</h2>
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Traveler Experiences
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-indigo-600">{testimonial.trip}</p>
                </div>
              </div>
              
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>

              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experinces