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
    <section className="bg-slate-100 dark:bg-gray-900">
      <div className="px-4 py-8 sm:p-8 md:p-12 lg:p-16">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white transition duration-500 ease-in-out hover:text-blue-500">Customers Rely on Kenosha AI for:</h2>
          <p className="text-gray-500 sm:text-lg dark:text-gray-400 mb-10">Here are a few reasons why you should try Kenosha AI</p>
          <div className="mt-8 space-y-8 md:space-y-0 md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
                  <img src={bullseye} alt="AI-powered Proposal Generation" className="mx-auto mb-4 w-16 h-16" />
                  <h3 className="mb-2 text-xl font-bold dark:text-white">AI-powered Proposal Generation</h3>
                  <p className="text-gray-500 dark:text-gray-400">Manage RFI, RFP, vendor assessment and security questionnaire content libraries, automate proposal and questionnaire response generation.</p>
              </div>
              <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
                  <img src={document} alt="Informed Consent Form Generation" className="mx-auto mb-4 w-16 h-16" />
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Informed Consent Form Generation</h3>
                  <p className="text-gray-500 dark:text-gray-400">Automate country, IRB/EC and site-specific informed consent form (ICF) generation based on SOPs and work instructions directly from the protocol.</p>
              </div>
              <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
                  <img src={compass} alt="Regulatory Guidance Navigation" className="mx-auto mb-4 w-16 h-16" />
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Regulatory Guidance Navigation</h3>
                  <p className="text-gray-500 dark:text-gray-400">Enable up-to-date regulatory guidance navigation with natural language queries, including comparisons between regulatory agencies.</p>
              </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => scrollToSection('#contact')}
            style={{ backgroundColor: '#171c84', boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)' }}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 sm:w-auto sm:text-sm transition duration-500 ease-in-out transform hover:-translate-y-1"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default InformationLong;
