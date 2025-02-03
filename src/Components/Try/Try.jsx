import React, { useState, useEffect, useRef } from 'react'

const Try = () => {
  // Sample video and text data - replace with your actual data
  const videoData = [
    {
      url: "/1.mp4", // Update path to where videos are actually stored
      text: "Text for video 1"
    },
    {
      url: "/2.mp4",
      text: "Text for video 2" 
    },
    {
      url: "/3.mp4",
      text: "Text for video 3"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [error, setError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd)
      videoRef.current.addEventListener('error', handleVideoError)
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd)
        videoRef.current.removeEventListener('error', handleVideoError) 
      }
    }
  }, [currentIndex])

  const handleVideoError = () => {
    setError(true)
    console.error('Error loading video:', videoData[currentIndex].url)
  }

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="flex flex-col items-center p-8">
      {error ? (
        <div className="text-red-500">Error loading video. Please check if the video files exist in the correct location.</div>
      ) : (
        <video
          ref={videoRef}
          src={videoData[currentIndex].url}
          autoPlay
          controls
          muted
          playsInline
          className="max-w-2xl w-full rounded-lg shadow-lg"
          onError={handleVideoError}
        />
      )}
      <div className="mt-6 text-xl text-center max-w-2xl">
        {videoData[currentIndex].text}
      </div>
    </div>
  )
}

export default Try