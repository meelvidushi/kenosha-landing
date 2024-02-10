import React from 'react';
import LogoImageDark from '../assets/brand-images/LogoLong-DarkMode@2x.png'; // Import the logo image for dark mode

// Example function to handle navigation
const navigate = (url) => {
  window.location.href = url;
};

function Footer() {
  return (
    <footer className="px-4 lg:px-6 py-4 dark:bg-gray-800" style={{ backgroundColor: '#171c84' }}> {/* Updated background color */}
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Changed to button for logo with navigation, styled with Tailwind */}
          <button
            type="button"
            className="flex items-center text-white  hover:underline focus:outline-none"
            onClick={() => navigate('https://kenosha.ai')}
          >
            <img src={LogoImageDark} className="mr-3 h-12 sm:h-12" alt="Kenosha AI Logo" />
          </button>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-50 sm:mb-0">
            <li>
              <button
                type="button"
                className="text-white  hover:underline me-4 md:me-6 focus:outline-none"
                onClick={() => navigate('https://kenosha.ai')}
              >
                About
              </button>
            </li>
          
            <li>
              <button
                type="button"
                className="text-white  hover:no-underline focus:outline-none"
                onClick={() => navigate('https://kenosha.ai')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-slate-50 sm:text-center">© 2023 Kenosha AI™. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
