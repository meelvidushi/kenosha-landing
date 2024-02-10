import React from 'react';
import mockup2 from '../assets/mockup2.svg'; // Import the dashboard mockup image
import background from '../assets/background.svg'; // Import the background image

function Hero() {
  // Function to handle navigation


  return (
    <div 
      className="max-w-screen p-8 mx-auto text-center lg:pt-16 lg:px-12"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
     
      {/* Adjusted Images to be smaller */}
      <img className="mx-auto mb-2 lg:mb-4 w-1/2 lg:w-1/2" src={mockup2} alt="dashboard overview" />
      <img className="mx-auto mb-2 lg:mb-4 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 hidden dark:block z-1 w-3/4 lg:w-1/2" src={mockup2} alt="dashboard overview dark" />
    </div>
  );
}

export default Hero;
