import React from 'react';
import LogoImageDark from '../assets/brand-images/LogoLong-DarkMode@2x.png'; // Import the logo image for dark mode

function Footer() {
  return (
    <footer className="px-4 lg:px-6 py-4 dark:bg-gray-800" style={{ backgroundColor: '#171c84' }}> {/* Updated background color */}
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://kenosha.ai" className="flex items-center">
            <img src={LogoImageDark} className="mr-3 h-12 sm:h-12" alt="Kenosha AI Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-50 sm:mb-0"> {/* Updated text color */}
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
        
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-slate-50 sm:text-center">© 2023 <a href="https://kenosha.ai/" className="hover:underline">Kenosha AI™</a>. All Rights Reserved.</span> {/* Updated text color */}
      </div>
    </footer>
  );
}

export default Footer;
