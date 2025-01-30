import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center mx-4 md:mx-7 mt-4 md:mt-7 mb-4 md:mb-7 rounded-xl" 
         style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="absolute inset-0  bg-opacity-50"></div>
      
      <div className="relative text-center text-white px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Adventure Awaits</h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto">
          "Life is either a daring adventure or nothing at all. Let us take you on a journey that will create memories lasting a lifetime."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-300 text-sm md:text-base">
            Our Services
          </button>
          <button className="w-full sm:w-auto bg-transparent hover:bg-white hover:text-indigo-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg border-2 border-white transition duration-300 text-sm md:text-base">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
