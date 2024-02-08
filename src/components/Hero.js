import React from 'react';
import mockup2 from '../assets/mockup2.svg'; // Import the logo image

function Hero() {
  return (
    <div className="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12">
      <div className='m-8'> 
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We are the best company ever.</h1>
        <p className="mb-8 font-light text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex flex-col lg:mb-4 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {/* Buttons and links with updated color */}
          <a href="https://kenosha.ai" style={{ backgroundColor: '#171c84' }} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Free trial for 30 days
          </a>
          <a href="https://kenosha.ai" style={{ borderColor: '#171c84', color: '#171c84' }} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Pricing & FAQ
          </a>  
        </div> 
      </div>
     
      {/* Images */}
      <img className="mx-auto mb-2 lg:mb-4 " src={mockup2} alt="dashboard overview" />
      <img className="mx-auto mb-2 lg:mb-4 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 hidden dark:block z-1" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg" alt="dashboard overview dark" />
    </div>
  );
}

export default Hero;
