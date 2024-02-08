import React from 'react';
import LogoImage from '../assets/brand-images/LogoLong-LightMode@2x.png'; // Import the logo image for light mode
import LogoImageDark from '../assets/brand-images/LogoLong-DarkMode@2x.png'; // Import the logo image for dark mode

function Header() {
  return (
    <header>
      <nav className="px-4 lg:px-6 py-4 dark:bg-gray-800" style={{ backgroundColor: '#171c84' }}> {/* Updated background color */}
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://kenosha.ai" className="flex items-center">
                <img src={LogoImageDark} className="mr-3 h-12 sm:h-12" alt="Kenosha AI Logo" />
            </a>
            <div className="flex items-center gap-2">
              {/* Contact button aligned to the right */}
              <a href="#" className="text-gray-800 dark:text-gray-900 bg-slate-50 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-200 focus:outline-none dark:focus:ring-gray-300">
                  Contact
              </a>
              {/* Join Waitlist button */}
              <a href="#" className="border border-slate-50 text-white hover:bg-slate-100 hover:text-gray-800 focus:ring-4 focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-150">
                  Join Waitlist
              </a>
            </div>
        </div>
      </nav>
      {/* Enhanced Banner for Kenosha AI Beta Announcement */}
      <div className="text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg">
        🎉 Kenosha AI Beta Coming Soon in 2025
      </div>
    </header>
  );
}

export default Header;
