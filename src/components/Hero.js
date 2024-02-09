import React from 'react';
import mockup2 from '../assets/mockup2.svg'; // Import the dashboard mockup image
import background from '../assets/background.svg'; // Import the background image
import model from '../assets/model.svg'; // Import the model image

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
      <div className='m-8'> 
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-50 md:text-5xl lg:text-6xl dark:text-white">We are the best company ever.</h1>
        <p className="mb-8 font-light text-slate-100 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex flex-col lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* Convert links to buttons */}
         
        </div> 
      </div>
     
      {/* Adjusted Images to be smaller */}
      <img className="mx-auto mb-2 lg:mb-4 w-1/2 lg:w-1/2" src={model} alt="dashboard overview" />
      <img className="mx-auto mb-2 lg:mb-4 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 hidden dark:block z-1 w-3/4 lg:w-1/2" src={mockup2} alt="dashboard overview dark" />
    </div>
  );
}

export default Hero;
