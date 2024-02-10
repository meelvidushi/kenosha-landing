import React from 'react';

function InformationLong() {

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };


  return (
  
  <section class="bg-slate-100 dark:bg-gray-900">
    <div class="p-16">

    <div class="p-16 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Customers Rely on Kenosha AI to: </h2>
      <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here are a few reasons why you should try Kenosha AI</p>
      <div class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <svg class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" ></path><path  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" ></path><path  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" ></path></svg>
              <h3 class="mb-2 text-xl font-bold dark:text-white">AI-powered Proposal Generation</h3>
              <p class="mb-4 text-gray-500 dark:text-gray-400">Manage RFI, RFP, vendor assessment and security questionnaire content libraries, automate proposal and questionnaire response generation.</p>

              <p class="mb-4 text-gray-500 dark:text-gray-400"> </p>
              
          </div>
          <div>
              <svg class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" ></path></svg>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Informed Consent Form Generation
</h3>
              <p class="mb-4 text-gray-500 dark:text-gray-400">Automate country, IRB/EC and site-specific informed consent form (ICF) generation based on SOPs and work instructions directly from the protocol.</p>
              
          </div>
          <div>
              <svg class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" ></path></svg>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Regulatory Guidance Navigation</h3>
              <p class="mb-4 text-gray-500 dark:text-gray-400">Enable up-to-date regulatory guidance navigation with natural language queries, including comparisons between regulatory agencies.</p>
            
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