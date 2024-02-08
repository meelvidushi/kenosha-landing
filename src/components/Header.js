import React from 'react';
import LogoImageDark from '../assets/brand-images/LogoLong-DarkMode@2x.png'; // Import the logo image for dark mode

function Header() {
  // Function to handle navigation
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <header>
      <nav className="px-4 lg:px-6 py-4 dark:bg-gray-800" style={{ backgroundColor: '#171c84' }}> {/* Updated background color */}
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <button onClick={() => navigateTo('https://kenosha.ai')} className="flex items-center focus:outline-none">
                <img src={LogoImageDark} className="mr-3 h-12 sm:h-12" alt="Kenosha AI Logo" />
            </button>
            <div className="flex items-center gap-2">
              {/* Contact button aligned to the right */}
              <button
                onClick={() => navigateTo('https://kenosha.ai')}
                className="text-gray-800 dark:text-gray-900 bg-slate-50 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-200 focus:outline-none dark:focus:ring-gray-300 transition-colors duration-150"
              >
                  Contact
              </button>
              {/* Join Waitlist button */}
              <button
                onClick={() => navigateTo('https://kenosha.ai')}
                className="border border-slate-50 text-white hover:bg-slate-100 hover:text-gray-800 focus:ring-4 focus:ring-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-150"
              >
                  Join Waitlist
              </button>
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
