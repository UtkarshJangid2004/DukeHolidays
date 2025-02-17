import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const images = [
    {
      src: "https://media.istockphoto.com/id/1455552376/photo/brihadishwara-temple-tanjore.jpg?s=1024x1024&w=is&k=20&c=u0JJKnXIYEIbRfPQaE1EfHdq7StSWfikCoCy3QawWIs=",
      text: "Explore the ancient Brihadishwara Temple",
    },
    {
      src: "https://media.istockphoto.com/id/1455552376/photo/brihadishwara-temple-tanjore.jpg?s=1024x1024&w=is&k=20&c=u0JJKnXIYEIbRfPQaE1EfHdq7StSWfikCoCy3QawWIs=",
      text: "Discover the beauty of Tanjore",
    },
    {
      src: "https://media.istockphoto.com/id/1455552376/photo/brihadishwara-temple-tanjore.jpg?s=1024x1024&w=is&k=20&c=u0JJKnXIYEIbRfPQaE1EfHdq7StSWfikCoCy3QawWIs=",
      text: "Unwind in the serene surroundings",
    },
  ];

  return (
    <>
      <div className="relative top-0 h-screen w-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <img
                src={image.src}
                alt={`Hero Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-60 -translate-y-1/2 text-white text-center">
                <h2 className="text-5xl font-bold w-[80%]">{image.text}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
