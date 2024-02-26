import React from 'react';
import compass from "../assets/compass.png";
import bullseye from "../assets/bullseye.png";
import document from "../assets/document.png";

function InformationLong() {

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

  return (
    <section id="information-long" className="bg-slate-100 dark:bg-gray-900">
      <div className="px-6 py-12 sm:px-10 md:px-16 lg:px-20"> {/* Increased padding */}
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl tracking-tight font-bold text-gray-900 dark:text-white"> {/* Reduced font size */}
            Customers Rely on Kenosha AI for:
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"> {/* Increased gap */}
              <div className="group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-lg p-8 bg-white dark:bg-gray-800"> {/* Increased padding */}
                  <img src={bullseye} alt="AI-powered Proposal Generation" className="mx-auto mb-5 w-16 h-16" /> {/* Adjusted margin */}
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white"> {/* Reduced font size and adjusted margin */}
                    AI-powered Proposal Generation
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400"> {/* Reduced font size */}
                    Manage RFI, RFP, vendor assessment, and security questionnaire content libraries, automate proposal and questionnaire response generation.
                  </p>
              </div>
              <div className="group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-lg p-8 bg-white dark:bg-gray-800">
                  <img src={document} alt="Informed Consent Form Generation" className="mx-auto mb-5 w-16 h-16" />
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                    Informed Consent Form Generation
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Automate country, IRB/EC, and site-specific informed consent form (ICF) generation based on SOPs and work instructions directly from the protocol.
                  </p>
              </div>
              <div className="group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-lg p-8 bg-white dark:bg-gray-800">
                  <img src={compass} alt="Regulatory Guidance Navigation" className="mx-auto mb-5 w-16 h-16" />
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                    Regulatory Guidance Navigation
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enable up-to-date regulatory guidance navigation with natural language queries, including comparisons between regulatory agencies.
                  </p>
              </div>
          </div>
        </div>
        <div className="mt-12 text-center"> {/* Increased margin */}
          <button
            onClick={() => scrollToSection('#contact')}
            style={{ backgroundColor: '#171c84', boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)' }}
            className="inline-flex items-center justify-center px-8 py-4 text-md font-medium text-center text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 sm:w-auto sm:text-sm transition duration-500 ease-in-out transform hover:-translate-y-1" 
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default InformationLong;
