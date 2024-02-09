import React from 'react';
import mockup5 from '../assets/mockup5.svg';

function CTA() {
  // Function to handle navigation
  const navigateTo = () => {
    window.location.href = 'https://kenosha.ai/';
  };

  return (
    <div className='p-16 pb-0 pt-0'> 
      <div className="gap-8 items-center mx-auto max-w-screen-xl xl:gap-16 md:flex md:justify-between md:items-center sm:py-16 lg:px-6">
        <img className="w-full md:w-1/2 dark:hidden" src={mockup5} alt="Dashboard light mode" />
        <img className="w-full md:w-1/2 hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="Dashboard dark mode" />

        <div className="md:w-1/2">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left">Let's rock the way you currently process RFPs by being the best company ever.</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          {/* Ensure button is left-aligned by wrapping in a div with text-left class if needed */}
          <div className="text-left">
            <button
              type="button"
              onClick={() => navigateTo('https://kenosha.ai')}
              style={{ backgroundColor: '#171c84' }}
              className="inline-flex items-center text-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary-900"
            >
              Get started
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
