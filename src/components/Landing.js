import React from 'react';
import mockup2 from '../assets/mockup2.svg'; // Import the logo image
const navigateTo = (url) => {
    window.location.href = url;
};

function Landing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-start lg:col-span-7 text-left mt-6 "> {/* Adjusted for left alignment */}
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">AI Solutions for the Clinical Research industry</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Kenosha AI is an enterprise-grade GPT-class artificial intelligence (AI) platform built for the clinical research industry. </p>
              <div className="flex flex-col lg:mb-4 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4"> {/* Adjusted for left alignment */}
            {/* Convert links to buttons */}
            <button
              onClick={() => navigateTo('https://kenosha.ai')}
              style={{ backgroundColor: '#171c84' }}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Free trial for 30 days
            </button>
            <button
              onClick={() => navigateTo('https://kenosha.ai')}
              style={{ borderColor: '#171c84', color: '#171c84' }}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Pricing & FAQ
            </button>  
          </div> 
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img className="mx-auto mb-2 lg:mb-4 " src={mockup2} alt="dashboard overview" />
          </div>                
      </div>
    </section>
  );
}

export default Landing;
