import React from "react";
import taj from "../../assets/taj_mahal.jpg"

const AboutUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <img 
              src={taj} 
              alt="Adventure Travel"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />


          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase mb-4">
              About Us
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Apollo Expeditions
            </h3>
            <p className="text-xl leading-relaxed text-gray-700">
              We craft extraordinary adventures that blend luxury with thrill. Our expert team designs unique expeditions 
              that push boundaries while ensuring comfort and unforgettable memories at every step of your journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
