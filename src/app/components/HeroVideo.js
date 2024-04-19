"use client"
import React, {useState, useEffect} from "react";

export default function HeroVideo() {
  const [heroText, setHeroText] = useState('');
  const textRotationInterval = [
    { text: 'Explore Job Opportunities in Japan', duration: 3000 },
    { text: "Immerse Yourself in Japan's Rich Culture", duration: 3000 },
    { text: 'Elevate Your Business Presence in Japan', duration: 4000 },
    { text: 'Begin Your Search Here', duration: 3000 }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateText = () => {
      setHeroText(textRotationInterval[currentIndex].text);
      const nextIndex = (currentIndex + 1) % textRotationInterval.length;
      setCurrentIndex(nextIndex);
    };

    const intervalId = setInterval(updateText, textRotationInterval[currentIndex].duration);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

    return (
      <div className="w-full">
        <video
          className="w-full h-40 sm:h-60 md:h-80 lg:h-96 object-cover relative"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/media/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute sm:top-1/2 top-1/3 md:top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center rounded-md p-2 bg-blue-800">
            <h1 className="md:text-3xl sm:text-xl text-lg font-bold mb-2">{heroText}</h1>
        </div>

      </div>
    );
  }
