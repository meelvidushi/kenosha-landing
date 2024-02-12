import React, { useState } from 'react';
import LogoImageDark from '../assets/brand-images/LogoLong-DarkMode@2x.png'; // Import the logo image for dark mode

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="dark:bg-gray-800" style={{ backgroundColor: '#171c84' }}>
      <nav className="px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <button onClick={() => navigateTo('https://kenosha.ai')} className="flex items-center focus:outline-none">
            <img src={LogoImageDark} className="mr-3 h-12" alt="Kenosha AI Logo" />
          </button>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
          <div className={`flex-col md:flex-row md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <button
                type="button"
                className="text-white hover:underline hover:text-blue-200 focus:outline-none transition-colors duration-150"
                onClick={() => navigateTo('https://kenosha.ai')}
              >
                About
              </button>
              <button
                type="button"
                className="text-white hover:underline hover:text-blue-200 focus:outline-none transition-colors duration-150"
                onClick={() => scrollToSection('#contact')}
              >
                Contact
              </button>
              <button
                type="button"
                className="text-white hover:underline hover:text-blue-200 focus:outline-none transition-colors duration-150"
                onClick={() => navigateTo('https://www.linkedin.com/company/kenosha-ai/about/')}
              >
                LinkedIn
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-white text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-150"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
