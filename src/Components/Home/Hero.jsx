import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[85vh] flex items-center justify-center m-7 rounded-xl" 
         style={{
           backgroundImage: "url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="absolute inset-0  bg-opacity-50"></div>
      
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">Adventure Awaits</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          "Life is either a daring adventure or nothing at all. Let us take you on a journey that will create memories lasting a lifetime."
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Our Services
          </button>
          <button className="bg-transparent hover:bg-white hover:text-indigo-600 text-white font-bold py-3 px-8 rounded-lg border-2 border-white transition duration-300">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
