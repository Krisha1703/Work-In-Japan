"use client"
import React, { useState, useEffect } from "react";

export default function HeroVideo() {
  const [heroText, setHeroText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textRotationInterval = [
      { text: 'Explore Job Opportunities in Japan', duration: 3000 },
      { text: "Immerse Yourself in Japan's Rich Culture", duration: 3000 },
      { text: 'Elevate Your Business Presence in Japan', duration: 4000 },
      { text: 'Begin Your Search Here', duration: 3000 }
    ];

    const updateText = () => {
      // Use currentIndex directly from the state to ensure it's up-to-date
      setHeroText(textRotationInterval[currentIndex].text);
      const nextIndex = (currentIndex + 1) % textRotationInterval.length;
      setCurrentIndex(nextIndex);
    };

    // Interval to update heroText based on currentIndex
    const intervalId = setInterval(updateText, textRotationInterval[currentIndex].duration);

    // Clean up the interval when the component unmounts or when dependencies change
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Include currentIndex and textRotationInterval in the dependency array

  return (
    <div className="w-full relative">
      <video
        className="w-full h-40 sm:h-60 md:h-80 lg:h-96 object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/media/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute sm:top-2/3 top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center rounded-md p-2 bg-blue-800">
        <h1 className="md:text-2xl sm:text-lg text-sm font-bold mb-2">{heroText}</h1>
      </div>
    </div>
  );
}
