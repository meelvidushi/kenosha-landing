import React from 'react';
import brad from "../assets/brad.jpeg"
import bill from "../assets/bill.jpeg"

function Team() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="p-16 mx-auto max-w-screen-xl lg:p-16">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
        </div> 
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
        <div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
  <img className="w-1/3 rounded-t-lg p-2" src={bill} alt="Bill's Avatar" />
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Bill Kish</h3>
    <span className="text-gray-500 dark:text-gray-400">CEO & Co-Founder</span>
    <p className="m-8 text-gray-500 dark:text-gray-400">Bill has over 30 years of experience at five successful startups, and is an accomplished technologist who has served as founding engineer, CEO, and CTO at startups and publicly traded companies that grew to over five billion in market cap.</p>
    {/* Social Icons */}
  </div>
</div>

<div className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center">
  <img className="w-1/3 rounded-t-lg p-2" src={brad} alt="brad's Avatar" />
  <div className="p-5">
    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Brad Pruitt</h3>
    <span className="text-gray-500 dark:text-gray-400">President & Co-Founder</span>
    <p className="m-8 text-gray-500 dark:text-gray-400">Brad has over 25 years of experience in clinical research and healthcare, and 13 years in the CRO industry including as a startup founder/CEO and as an executive medical director at top-10 CROs working with global sales and proposal teams.</p>
    {/* Social Icons */}
  </div>
</div>


        </div>  
      </div>
    </section>
  );
}

export default Team;