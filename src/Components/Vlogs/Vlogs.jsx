import React, { useState } from 'react'

const Vlogs = () => {
  // Demo video data - will be replaced with backend data later
  const demoVideos = [
    {
      id: 1,
      title: "Exploring Paris",
      description: "Join us as we explore the beautiful city of Paris",
      youtubeUrl: "https://www.youtube.com/embed/CHSnz0bCaUk?si=uDaZYn2ihLSoOetM",
      views: "10k",
      date: "2023-06-15"
    },
    {
      id: 2, 
      title: "Italian Food Tour",
      description: "Tasting the best Italian dishes in Rome",
      youtubeUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?si=Jme5G7eWZ0DQHG5o",
      views: "8.5k",
      date: "2023-06-10"
    },
    {
      id: 3,
      title: "Barcelona Travel Guide",
      description: "Everything you need to know about Barcelona",
      youtubeUrl: "https://www.youtube.com/embed/d_xyD3nNQuo?si=tEYw3m3DMMVaTyDO", 
      views: "12k",
      date: "2023-06-05"
    }
  ];

  /* Commented out until backend is set up
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('your-api-endpoint/videos');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);
  */

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-8 mt-16 sm:mt-20 lg:mt-24">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600 mb-6 sm:mb-8 lg:mb-10 text-center">
        Our Travel Vlogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {demoVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.youtubeUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-3 sm:p-4 lg:p-5">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">{video.title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{video.description}</p>
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                <span className="font-medium">{video.views} views</span>
                <span className="font-medium">{video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vlogs