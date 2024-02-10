import React from 'react';
import Hero from './components/Hero'; // Import the Hero component
import Header from './components/Header';
import Footer from './components/Footer';
import InformationLong from './components/InformationLong';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Team from './components/Team';

function Display() {
  return (
    <div className="bg-slate-50">
<Header />
<Landing></Landing>
      <Hero /> {/* Render the Hero component */}
      <InformationLong></InformationLong>
      <Team/>
      <Contact></Contact>
      <Footer></Footer>
     </div>
  );
}

export default Display;
