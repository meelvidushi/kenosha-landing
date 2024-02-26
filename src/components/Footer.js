import React from 'react';
import LogoImageDark from '../assets/brand-images/LogoLong-DarkMode@2x.png';
import linkedin from '../assets/linkedin.svg'; // Ensure this path is correct

const navigate = (url) => {
  window.location.href = url;
};

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function Footer() {
  return (
    <footer className="px-4 lg:px-6 py-4 dark:bg-gray-800" style={{ backgroundColor: '#171c84' }}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="flex items-center text-white hover:underline focus:outline-none mb-4 sm:mb-0"
            onClick={() => navigate('https://kenosha.ai')}
          >
            <img src={LogoImageDark} className="mr-3 h-12 sm:h-12" alt="Kenosha AI Logo" style={{ minWidth: '48px' }} />
          </button>
          <ul className="flex flex-col sm:flex-row flex-wrap items-center mb-6 text-sm font-medium text-slate-50 sm:mb-0">
            <li className="my-2 sm:my-0">
              <button
                type="button"
                className="text-white hover:underline me-4 md:me-6 focus:outline-none"
                onClick={() => scrollToSection('#information-long')}
              >
                Solutions
              </button>
            </li>
            <li className="my-2 sm:my-0">
              <button
                type="button"
                className="text-white hover:underline me-4 md:me-6 focus:outline-none"
                onClick={() => scrollToSection('#team')}
              >
                Team
              </button>
            </li>
            <li className="my-0">
            <button
  type="button"
  className="focus:outline-none"
  onClick={() => navigate('https://www.linkedin.com/company/kenosha-ai/about/')}
>
  <img
    src={linkedin}
    alt="LinkedIn"
    className="h-4 w-4 filter invert" // Added filter invert to make the image appear white
    style={{ filter: 'invert(100%)' }} // This CSS filter inverts the colors, making black appear white
  />
</button>

            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-slate-50 sm:text-center">© 2024 Kenosha AI™. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
