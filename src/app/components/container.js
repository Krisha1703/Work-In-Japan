<<<<<<< HEAD
"use client"
import React, { useState } from 'react';

export default function Container({ heading, imageSrc, paragraphText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative md:w-1/4 sm:w-1/2 w-3/4 p-4 mx-6 mt-6 rounded-lg border-4 border-blue-800 
                 hover:bg-blue-800 hover:shadow-xl transition duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <h3 className="md:text-2xl sm:text-xl text-lg font-bold text-center">
          <span
            className={`${
              isHovered ? 'text-white' : 'text-blue-800'
            } transition duration-300`}
          >
            {heading}
          </span>
        </h3>
      </div>
      <div className="overflow-hidden rounded-lg">
        {isHovered ? (
          <p className="text-white md:text-sm text-xs text-center">{paragraphText}</p>
        ) : (
          <img
            src={imageSrc}
            alt="Image"
            className="w-full"
            style={{ transition: 'opacity 0.3s ease-in-out' }}
          />
        )}
      </div>
    </div>
  );
}
=======
"use client"
import React, { useState } from 'react';

export default function Container({ heading, imageSrc, paragraphText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative md:w-1/4 sm:w-1/2 w-3/4 p-4 mx-6 mt-6 rounded-lg border-4 border-blue-800 
                 hover:bg-blue-800 hover:shadow-xl transition duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <h3 className="md:text-2xl sm:text-xl text-lg font-bold text-center">
          <span
            className={`${
              isHovered ? 'text-white' : 'text-blue-800'
            } transition duration-300`}
          >
            {heading}
          </span>
        </h3>
      </div>
      <div className="overflow-hidden rounded-lg">
        {isHovered ? (
          <p className="text-white md:text-sm text-xs text-center">{paragraphText}</p>
        ) : (
          <img
            src={imageSrc}
            alt="Image"
            className="w-full"
            style={{ transition: 'opacity 0.3s ease-in-out' }}
          />
        )}
      </div>
    </div>
  );
}
>>>>>>> c2c542d521f833fa6787f58400f185eaba5d564b
