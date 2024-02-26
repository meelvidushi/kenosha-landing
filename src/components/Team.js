import React from 'react';
import brad from "../assets/brad.jpeg";
import bill from "../assets/bill.jpeg";
import linkedin from "../assets/linkedin.svg";

const TeamMemberCard = ({ name, title, description, imageUrl, profileUrl }) => {
  return (
    <div
      className="group bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden relative"
      aria-label={`View ${name}'s profile`}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72 xl:h-80" src={imageUrl} alt={`${name}'s Avatar`} />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent group-hover:from-[#171C84] group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
        <span className="text-gray-500 dark:text-gray-400 block mb-3">{title}</span>
        <p className="text-gray-500 dark:text-gray-400 hidden group-hover:block">{description}</p>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:text-blue-400 mt-4">
          <img src={linkedin} alt="LinkedIn" className="w-5 h-5 mr-2" />View LinkedIn Profile
        </a>
      </div>
    </div>
  );
};


function Team() {
  // Team members' data
  const teamMembers = [
    {
      name: "Bill Kish",
      title: "CEO & Co-Founder",
      description: "Bill has over 30 years of experience at five successful startups, and is an accomplished technologist who has served as founding engineer, CEO, and CTO at startups and publicly traded companies that grew to over five billion in market cap.",
      imageUrl: bill,
      profileUrl: "https://www.linkedin.com/in/billkish/",
    },
    {
      name: "Brad Pruitt, M.D.",
      title: "President & Co-Founder",
      description: "Brad has over 25 years of experience in clinical research and healthcare, and 13 years in the CRO industry including as a startup founder/CEO and as an executive medical director at top-10 CROs working with global sales and proposal teams.",
      imageUrl: brad,
      profileUrl: "https://www.linkedin.com/in/bradpruitt/",
    },
  ];

  return (
    <section id="team" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:p-12 lg:p-16">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 lg:mb-16">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;