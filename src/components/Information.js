import React from 'react';
import mockup3 from '../assets/mockup3.svg';

function Information() {
  return (
    <div className='p-16 pb-0 pt-0 bg-slate-50'> 
      <div className="gap-8 items-center mx-auto max-w-screen-xl xl:gap-16 md:flex md:justify-between md:items-center sm:py-16 lg:px-6">
        <div className="md:w-1/2">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left">We will change the course of medical RFPs for all of history.</h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet. Eget lorem dolor sed viverra ipsum.</p>
          {/* Ensure button is left-aligned by wrapping in a div with text-left class if needed */}
          <div className="text-left">
            <a href="#" style={{ backgroundColor: '#171c84' }} className="inline-flex items-center text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-primary-900">
              Get started
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
        <img className="w-full md:w-1/2 md:ml-8 dark:hidden" src={mockup3} alt="Dashboard light mode" />
        <img className="w-full md:w-1/2 md:ml-8 hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="Dashboard dark mode" />
      </div>
    </div>
  );
}

export default Information;
