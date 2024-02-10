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
      <div className="p-16">
        <div className="p-16 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Customers Rely on Kenosha AI to: </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here are a few reasons why you should try Kenosha AI</p>
          <div className="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <img src={bullseye} alt="AI-powered Proposal Generation" className="mx-auto mb-4 w-12 h-12" />
                  <h3 className="mb-2 text-xl font-bold dark:text-white">AI-powered Proposal Generation</h3>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">Manage RFI, RFP, vendor assessment and security questionnaire content libraries, automate proposal and questionnaire response generation.</p>
              </div>
              <div>
                  <img src={document} alt="Informed Consent Form Generation" className="mx-auto mb-4 w-12 h-12" />
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Informed Consent Form Generation</h3>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">Automate country, IRB/EC and site-specific informed consent form (ICF) generation based on SOPs and work instructions directly from the protocol.</p>
              </div>
              <div>
                  <img src={compass} alt="Regulatory Guidance Navigation" className="mx-auto mb-4 w-12 h-12" />
                  <h3 className="mb-2 text-xl font-bold dark:text-white">Regulatory Guidance Navigation</h3>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">Enable up-to-date regulatory guidance navigation with natural language queries, including comparisons between regulatory agencies.</p>
              </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('#contact')}
          style={{ backgroundColor: '#171c84' }}
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Request Demo
        </button>
      </div>
    </section>
  );
}

export default InformationLong;
