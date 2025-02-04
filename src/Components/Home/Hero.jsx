import React, { useState, useEffect } from "react";
import video1 from "../../assets/1.mp4"
import video2 from "../../assets/2.mp4"
import video3 from "../../assets/3.mp4"

const Hero = () => {
  const videoData = [
    {
      url: video1,
      text: "Text for video 1"
    },
    {
      url: video2,
      text: "Text for video 2"
    },
    {
      url: video3, 
      text: "Text for video 3"
    }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('heroVideo');
    
    const handleVideoEnd = () => {
      // Immediately switch to next video without animation
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
      );
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      // Preload the next video
      videoElement.load();
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentVideoIndex]);

  return (
    <>
      <div className="relative h-[85vh] flex items-center justify-center mx-4 md:mx-7 mt-2 md:mt-4 mb-4 md:mb-7 rounded-xl overflow-hidden">
        <video
          id="heroVideo"
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover opacity-90  blur-[4px]"
          src={videoData[currentVideoIndex].url}
        />

        <div className="absolute inset-0 bg-opacity-50"></div>

        <div className="relative text-center text-white px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {videoData[currentVideoIndex].text}
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto">
            "Life is either a daring adventure or nothing at all. Let us take
            you on a journey that will create memories lasting a lifetime."
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
    </>
  );
};

export default Hero;
