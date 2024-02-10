import React from 'react';
import LogoImageDark from '../assets/brand-images/LogoLong-DarkMode@2x.png'; // Import the logo image for dark mode

function Header() {
  // Function to handle navigation
  const navigateTo = (url) => {
    window.location.href = url;
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
  onClick={() => scrollToSection('#contact')}
  className="inline-flex items-center justify-center bg-slate-50 px-5 py-3 text-base font-medium text-center text-slate-900 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
>
  Contact
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
